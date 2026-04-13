import type { BaseStyle } from "../types/styles";
import { KNOWN_OBJECT_STYLE_KEYS } from "./constants/styleKeys";

export function isStyleObject(value: unknown): value is BaseStyle {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  for (const key in value as object) {
    const v = (value as any)[key];

    if (KNOWN_OBJECT_STYLE_KEYS.has(key)) continue;

    if (typeof v === "object" && v !== null && !Array.isArray(v)) {
      return false;
    }
  }

  return true;
}

export function toCamelCase(parts: string[]): string {
  return parts
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join("");
}
