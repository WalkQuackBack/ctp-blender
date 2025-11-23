// import { XMLBuilder, XMLParser } from "fast-xml-parser";
// import {
//   BpyTheme,
//   fast_xml_parser_config,
//   isHex,
//   recursive_iterator,
// } from "./utils.ts";

// async function generate_color_index_for_version(version: string) {
//   const reference = await Deno.readTextFile(`./versions/${version}.xml`);

//   const parser = new XMLParser(fast_xml_parser_config);
//   const xml: BpyTheme = parser.parse(reference, true);

//   const hexColors: string[] = [];

//   recursive_iterator(xml, (_key, value) => {
//     if (value && typeof value === "string" && !hexColors.includes(value)) {
//       hexColors.push(value);
//     }
//   });
// }
