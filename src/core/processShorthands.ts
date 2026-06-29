import type { ResolveShorthandObject } from '../types/shorthands';
import { SHORTHAND_EXPANSIONS } from '../constants/shorthandKeys';

/**
 * Expands shorthand properties into their long-form equivalents.
 *
 * @param obj - The style object to process
 * @returns A new object with shorthands expanded
 *
 * @example
 * ```ts
 * processShorthands({
 *   margin: { x: 10, y: 20 },
 *   padding: { top: 5 }
 * });
 * // Returns:
 * // {
 * //   marginLeft: 10,
 * //   marginRight: 10,
 * //   marginTop: 20,
 * //   marginBottom: 20,
 * //   paddingTop: 5
 * // }
 * ```
 */
export function processShorthands<T>(obj: T): ResolveShorthandObject<T> {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return obj as ResolveShorthandObject<T>;
  }

  const result: Record<string, unknown> = {};

  for (const key in obj) {
    const value = obj[key as keyof T];

    // Check if this key is a shorthand property
    const expansions = SHORTHAND_EXPANSIONS[key as string];

    if (expansions && typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Expand the shorthand
      for (const variantKey in value) {
        const expandedKeys = expansions[variantKey];

        if (expandedKeys) {
          const variantValue = (value as Record<string, unknown>)[variantKey];

          // Apply the value to all expanded keys
          for (const expandedKey of expandedKeys) {
            result[expandedKey] = variantValue;
          }
        }
      }
    } else {
      // Not a shorthand, recurse into nested objects
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        result[key] = processShorthands(value);
      } else {
        result[key] = value;
      }
    }
  }

  return result as ResolveShorthandObject<T>;
}
