import { X2jOptions, XmlBuilderOptions } from "fast-xml-parser";
import { parseHex } from "culori";

export function recursive_iterator(
  obj: NestedRecord,
  callback: (key: string, value: string | NestedRecord) => void,
): void {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      recursive_iterator(value, callback);
    } else {
      callback(key, value);
    }
  }
}

export type NestedRecord = { [k: string]: string | NestedRecord };

export type StrongObject<T> = { [key: string]: StrongValue<T> };
export type StrongArray<T> = Array<StrongValue<T>>;
export type StrongValue<T> = T | StrongObject<T> | StrongArray<T>;

export type Editor<T> = (key: string, value: T) => T;

export function is_strong_object<T>(
  value: StrongValue<T>,
): value is StrongObject<T> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function strong_edit<T>(
  data: StrongValue<T>,
  editor: Editor<T>,
): StrongValue<T> {
  if (Array.isArray(data)) {
    return data.map((value, index) => {
      if (is_strong_object(value) || Array.isArray(value)) {
        return strong_edit(value, editor);
      } else {
        return editor(index.toString(), value as T);
      }
    });
  }

  if (is_strong_object(data)) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (is_strong_object(value) || Array.isArray(value)) {
          return [key, strong_edit(value, editor)];
        } else {
          return [key, editor(key, value as T)];
        }
      }),
    );
  }

  return data;
}

type ThemeFontStyle = {
  "@_points": string
  "@_character_weight": string
  "@_shadow": string
  "@_shadow_offset_x": string
  "@_shadow_offset_y": string
  "@_shadow_alpha": string
  "@_shadow_value": string
}

export type BpyTheme = {
  bpy: {
    Theme: NestedRecord;
    ThemeStyle: {
      [key: string]: {
        ThemeFontStyle: ThemeFontStyle
      }
    };
  };
};

export const xml_builder_config: XmlBuilderOptions = {
  ignoreAttributes: false,
  format: true,
  tagValueProcessor: () => {}
};

export const xml_parser_config: X2jOptions = {
  ignoreAttributes: false
};

export const isHex = (hex: string) => parseHex(hex) !== undefined