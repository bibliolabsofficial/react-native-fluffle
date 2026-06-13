import type { ColorValue } from 'react-native';
import type { OklchColor } from '../types/colors';
import type { ColorKeys } from '../types/colorStyles';
import { formatHex, formatHex8, oklch } from 'culori';
import { Platform } from 'react-native';

/**
 * Resolves an {@link OklchColor} into a React Native-compatible
 * {@link ColorValue} type.
 *
 * @typeParam T - The value to resolve.
 */
type ResolveColor<T> = T extends OklchColor ? ColorValue : T;

/**
 * Recursively resolves all custom OKLCH color objects within a type.
 *
 * Any property whose key is listed in {@link ColorKeys} will have
 * {@link OklchColor} replaced with React Native's {@link ColorValue}.
 *
 * This mirrors the runtime behavior of {@link processColors}, ensuring
 * that styles returned from the processing pipeline have the correct
 * React Native color types.
 *
 * @typeParam T - The object type to transform.
 *
 * @example
 * ```ts
 * type Input = {
 *   color: OklchColor;
 *   backgroundColor: OklchColor;
 *   marginTop: number;
 * };
 *
 * type Output = ResolveColorObject<Input>;
 * // {
 * //   color: ColorValue;
 * //   backgroundColor: ColorValue;
 * //   marginTop: number;
 * // }
 * ```
 */
export type ResolveColorObject<T> = T extends readonly unknown[]
  ? { [K in keyof T]: ResolveColorObject<T[K]> }
  : T extends object
    ? {
        [K in keyof T]: K extends ColorKeys ? ResolveColor<T[K]> : ResolveColorObject<T[K]>;
      }
    : T;

/**
 * Serializes an OKLCH color into a CSS-compatible color string.
 *
 * Used exclusively on web platforms where modern browsers support
 * native `oklch(...)` color syntax.
 *
 * @param color - The OKLCH color to serialize.
 * @returns A CSS `oklch(...)` color string.
 */
function serializeWebColor(color: OklchColor) {
  return `oklch(${color.l * 100}% ${color.c} ${color.h} / ${color.alpha ? color.alpha : 1})`;
}

/**
 * Serializes an OKLCH color into a hexadecimal color string for
 * React Native platforms.
 *
 * React Native does not currently support OKLCH syntax directly,
 * so colors are converted to sRGB using Culori and emitted as either:
 *
 * - `#RRGGBB`
 * - `#RRGGBBAA`
 *
 * depending on whether transparency is present.
 *
 * @param color - The OKLCH color to serialize.
 * @returns A hexadecimal color string.
 */
function serializeNativeColor(color: OklchColor) {
  const culoriColor = oklch({
    mode: 'oklch',
    l: color.l,
    c: color.c,
    h: color.h,
    alpha: color.alpha ?? 1,
  });

  return (color.alpha ?? 1) < 1 ? formatHex8(culoriColor) : formatHex(culoriColor);
}

/**
 * Serializes an OKLCH color into a platform-specific representation.
 *
 * Platform behavior:
 * - Web: returns a CSS `oklch(...)` string
 * - Native: returns a hexadecimal color string
 *
 * @param color - The OKLCH color to serialize.
 * @returns A platform-compatible color value.
 */
function serializeColor(color: OklchColor) {
  if (Platform.OS === 'web') return serializeWebColor(color);
  return serializeNativeColor(color);
}

/**
 * Determines whether a value is an {@link OklchColor}.
 *
 * @param value - The value to test.
 * @returns `true` if the value is an OKLCH color object.
 */
export function isOklchColor(value: unknown): value is OklchColor {
  return typeof value === 'object' && value !== null && (value as OklchColor).__type === 'oklch';
}

/**
 * Recursively traverses an object and converts any OKLCH color objects
 * into platform-compatible color values.
 *
 * Arrays and nested objects are processed recursively.
 *
 * @param obj - The value to process.
 * @returns A new value with all OKLCH colors resolved.
 */
function processColorObject(obj: unknown): unknown {
  if (isOklchColor(obj)) return serializeColor(obj);
  if (Array.isArray(obj)) return obj.map(processColorObject);

  if (typeof obj === 'object' && obj !== null) {
    const out: Record<string, unknown> = {};

    for (const key in obj) {
      out[key] = processColorObject((obj as Record<string, unknown>)[key]);
    }

    return out;
  }

  return obj;
}

/**
 * Processes a style object (or any nested object structure),
 * converting all {@link OklchColor} values into platform-compatible
 * React Native color values.
 *
 * This is the main entry point for color transformation and is used
 * internally by the styling pipeline before styles are passed to
 * React Native components.
 *
 * @typeParam T - The input object type.
 * @param obj - The object to process.
 * @returns A new object with all OKLCH colors resolved.
 *
 * @example
 * ```ts
 * processColors({
 *   color: oklch(0.65, 0.12, 348),
 * });
 * ```
 *
 * @remarks
 * - Web outputs CSS `oklch(...)` strings
 * - Native outputs hexadecimal color strings
 * - Arrays and nested objects are processed recursively
 * - The returned type mirrors the runtime transformation via
 *   {@link ResolveColorObject}
 */
export function processColors<T>(obj: T): ResolveColorObject<T> {
  return processColorObject(obj) as ResolveColorObject<T>;
}
