import { parseArgs } from "@std/cli/parse-args";
import { XMLParser } from "fast-xml-parser";
import { oklch, parseHex } from "culori";
import {
  BpyTheme,
  isHex,
  recursive_iterator,
  xml_parser_config,
} from "./utils.ts";

import { colorIndex as existingColorIndexObj } from "./color_index.ts";

const args = parseArgs(Deno.args, {
  string: ["versions"],
  default: {
    versions: "5.0.0,4.5LTS",
  },
});
const versions = args.versions.split(",");

const hex_colors: string[] = [];
const existingColorIndexText = await Deno.readTextFile(
  `./scripts/color_index.ts`,
);
let append_color_index = "";

async function pool_colors_for_version(version: string) {
  const reference = await Deno.readTextFile(`./versions/${version}.xml`);

  const parser = new XMLParser(xml_parser_config);
  const xml: BpyTheme = parser.parse(reference, true);

  recursive_iterator(xml, (_key, value) => {
    if (!value || typeof value !== "string") return;
    value = value.toUpperCase();
    if (
      isHex(value) &&
      !hex_colors.includes(value) &&
      !existingColorIndexObj[value]
    ) {
      hex_colors.push(value);
    }
  });
}

for (let i = 0; i < versions.length; i++) {
  const version = versions[i];
  await pool_colors_for_version(version);
}

// Sort by:
// is achromatic (greyscale)
// hue
// chroma
// lightness
// alpha
hex_colors.sort((a, b) => {
  const a_rgb = parseHex(a);
  const b_rgb = parseHex(b);

  const a_oklch = oklch(a_rgb!);
  const b_oklch = oklch(b_rgb!);

  const a_is_achromatic = a_oklch.c === 0;
  const b_is_achromatic = b_oklch.c === 0;

  if (a_is_achromatic && !b_is_achromatic) return 1;
  if (!a_is_achromatic && b_is_achromatic) return -1;
  if (a_is_achromatic && b_is_achromatic || !a_oklch.h || !b_oklch.h) {
    if (a_oklch.l !== b_oklch.l) return a_oklch.l - b_oklch.l;
    return (a_oklch.alpha ?? 1) - (b_oklch.alpha ?? 1);
  }

  if (a_oklch.h !== b_oklch.h) return a_oklch.h - b_oklch.h;
  if (a_oklch.c !== b_oklch.c) return a_oklch.c - b_oklch.c;
  if (a_oklch.l !== b_oklch.l) return a_oklch.l - b_oklch.l;

  return (a_oklch.alpha ?? 1) - (b_oklch.alpha ?? 1);
});

for (let i = 0; i < hex_colors.length; i++) {
  const color = hex_colors[i];
  append_color_index += `    "${color}": \`${color}\`,\n`;
}

const color_index = existingColorIndexText
  .slice(0, -1)
  .concat(
    "\n",
    append_color_index,
    "}",
  );

Deno.writeTextFile("./scripts/color_index.ts", color_index);
