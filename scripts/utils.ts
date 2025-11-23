import { X2jOptions, XmlBuilderOptions } from "fast-xml-parser";

export function recursive_iterator(
  obj: NestedRecord,
  callback: (key: string, value: string | NestedRecord) => void,
): void {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      recursive_iterator(value, callback);
    } else {
      callback(key, value);
    }
  }
}

export type NestedRecord = { [k: string]: string | NestedRecord };

export interface StrongRecord<T> {
  [key: string]: T | StrongRecord<T>;
}
export type Editor<T> = (key: string, value: T) => T;

export function is_strong_record<T>(
  value: T | StrongRecord<T>,
): value is StrongRecord<T> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function strong_edit<T>(
  record: StrongRecord<T>,
  editor: Editor<T>,
): StrongRecord<T> {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => {
      if (is_strong_record(value)) {
        return [key, strong_edit(value, editor)];
      } else {
        return [key, editor(key, value as T)];
      }
    }),
  );
}

export type BpyTheme = {
  bpy: {
    Theme: NestedRecord;
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

export function isHex(string: string): boolean {
  return string.match(/^#(?:[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/) !== null;
}
