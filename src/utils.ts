import type { BaseStyle } from './types/styles';
import { KNOWN_OBJECT_STYLE_KEYS } from './constants/styleKeys';

/**
 * Determines whether a value is a valid "leaf" style object.
 *
 * A style object is considered valid if:
 * - It is a non-null object
 * - It is not an array
 * - It does not contain nested objects (except for known style keys)
 *
 * This function is used to distinguish between:
 * - A **style object** (e.g. `{ padding: 10 }`)
 * - A **nested style map** (e.g. `{ container: { padding: 10 } }`)
 *
 * @param value - The value to check
 * @returns `true` if the value is a {@link BaseStyle}, otherwise `false`
 *
 * @example
 * ```ts
 * isStyleObject({ padding: 10 }) // true
 * isStyleObject({ header: { padding: 10 } }) // false
 * ```
 *
 * @remarks
 * - Certain style properties (e.g. `shadowOffset`, `textShadowOffset`)
 *   are allowed to contain nested objects and are listed in
 *   {@link KNOWN_OBJECT_STYLE_KEYS}
 * - Arrays are explicitly excluded
 *
 * @warning
 * This function relies on structural heuristics and may need to be updated
 * as new React Native style properties are introduced.
 *
 * @see KNOWN_OBJECT_STYLE_KEYS
 */
export function isStyleObject(value: unknown): value is BaseStyle {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  for (const key in value as object) {
    const v = (value as Record<string, unknown>)[key];

    if (KNOWN_OBJECT_STYLE_KEYS.has(key)) continue;

    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      return false;
    }
  }

  return true;
}

/**
 * Converts an array of string segments into a camelCase string.
 *
 * @param parts - The string segments to combine
 * @returns A camelCase string
 *
 * @example
 * ```ts
 * toCamelCase(["padding", "top"]) // "paddingTop"
 * toCamelCase(["margin", "inline", "start"]) // "marginInlineStart"
 * ```
 *
 * @remarks
 * - The first segment remains unchanged
 * - Subsequent segments are capitalized
 */
export function toCamelCase(parts: string[]): string {
  return parts
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('');
}
