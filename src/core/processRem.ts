import type { BaseStyle, NestedStyles } from '../types/styles';
import type { RemKey } from '../constants/remKeys';
import { parseRem } from './rem';
import { REM_KEYS } from '../constants/remKeys';
import { isStyleObject } from '../utils';

/** Resolves a `rem` string type into a number. */
type ResolveRemValue<T> = T extends `${number}rem` ? number : T;

/** Recursively resolves all `rem` values within an object type. */
type ResolveRemObject<T> = T extends object
  ? { [K in keyof T]: ResolveRemObject<T[K]> }
  : ResolveRemValue<T>;

/**
 * Recursively processes a style object, converting any `rem` values
 * into numeric pixel values based on the current configuration.
 *
 * This function tracks the current property path (e.g. `"textShadowOffset.width"`)
 * in order to match against {@link REM_KEYS}, which includes nested keys.
 *
 * @param obj - The style object to process
 * @param path - Internal path used to resolve nested keys (do not pass manually)
 * @returns A new object with `rem` values resolved
 *
 * @example
 * ```ts
 * processObject({
 *   fontSize: "2rem",
 *   textShadowOffset: { width: "0.5rem" }
 * });
 * ```
 *
 * @remarks
 * - Only keys listed in {@link REM_KEYS} are eligible for `rem` conversion
 * - Nested objects are processed recursively
 * - Arrays are not processed and are returned as-is
 */
function processObject(obj: Record<string, unknown>, path: string[] = []) {
  const out: Record<string, unknown> = {};

  for (const key in obj) {
    const value = obj[key];
    const fullPath = [...path, key].join('.');

    // Nested object
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      out[key] = processObject(value as Record<string, unknown>, [...path, key]);
      continue;
    }

    // Rem conversion
    if (typeof value === 'string' && REM_KEYS.has(fullPath as RemKey)) {
      const rem = parseRem(value);
      if (rem !== null) out[key] = rem;
      continue;
    }

    out[key] = value;
  }

  return out;
}

/**
 * Processes a style input (flat or nested), resolving all `rem` values
 * into numeric pixel values.
 *
 * This is the main entry point for `rem` transformation and is used internally
 * by {@link StyleSheet.create}.
 *
 * @param input - A style object or nested style map
 * @returns A new object with all `rem` values resolved to numbers
 *
 * @example
 * ```ts
 * processRem({
 *   text: { fontSize: "2rem" },
 *   container: { padding: "1rem" }
 * });
 * ```
 *
 * @remarks
 * - Only keys listed in {@link REM_KEYS} are eligible for `rem` conversion
 * - Nested objects are processed recursively
 * - Arrays are currently **not processed** and are returned as-is
 *
 * @future
 * Planned support for shorthand syntax using **object notation**.
 * ```ts
 * {
 *   margin: { top: 10, bottom: 25 },
 *   padding: { block: 10, inline: 15 },
 *   gap: { row: 10, column: 8 }
 * }
 * ```
 */
export function processRem<T extends NestedStyles | BaseStyle>(input: T): ResolveRemObject<T> {
  if (isStyleObject(input)) {
    return processObject(input as Record<string, unknown>) as ResolveRemObject<T>;
  }

  const out: Record<string, unknown> = {};

  for (const key in input) {
    const value = input[key];

    if (typeof value === 'object' && value !== null) {
      out[key] = processObject(value as NestedStyles);
    } else {
      out[key] = value;
    }
  }

  return out as ResolveRemObject<T>;
}
