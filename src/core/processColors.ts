import type { ColorValue } from 'react-native';
import type { OklchColor, RGBColor, HSLColor, HWBColor } from '../types/colors';
import type { ColorKeys } from '../types/colorStyles';
import { formatHex, formatHex8, oklch } from 'culori';
import { Platform } from 'react-native';

/**
 * Resolves any supported color type into a React Native-compatible
 * {@link ColorValue} type.
 *
 * @typeParam T - The value to resolve.
 */
type ResolveColor<T> = T extends OklchColor | RGBColor | HSLColor | HWBColor ? ColorValue : T;

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
 * Serializes an RGB color into a string representation.
 *
 * Returns `rgba(...)` if alpha is less than 1, otherwise `rgb(...)`.
 *
 * @param color - The RGB color to serialize.
 * @returns A color string compatible with web and native platforms.
 */
function serializeRGBColor(color: RGBColor) {
  const hasAlpha = (color.alpha ?? 1) < 1;
  const alpha = color.alpha ?? 1;

  if (hasAlpha) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

/**
 * Serializes an HSL color into a string representation.
 *
 * Returns `hsla(...)` if alpha is less than 1, otherwise `hsl(...)`.
 *
 * @param color - The HSL color to serialize.
 * @returns A color string compatible with web and native platforms.
 */
function serializeHSLColor(color: HSLColor) {
  const hasAlpha = (color.alpha ?? 1) < 1;
  const alpha = color.alpha ?? 1;

  if (hasAlpha) {
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${alpha})`;
  }
  return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
}

/**
 * Serializes an HWB color into a string representation.
 *
 * Returns `hwba(...)` if alpha is less than 1, otherwise `hwb(...)`.
 *
 * @param color - The HWB color to serialize.
 * @returns A color string compatible with web and native platforms.
 */
function serializeHWBColor(color: HWBColor) {
  const hasAlpha = (color.alpha ?? 1) < 1;
  const alpha = color.alpha ?? 1;

  if (hasAlpha) {
    return `hwb(${color.h} ${color.w}% ${color.b}% / ${alpha})`;
  }
  return `hwb(${color.h} ${color.w}% ${color.b}%)`;
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
 * Determines whether a value is an {@link RGBColor}.
 *
 * @param value - The value to test.
 * @returns `true` if the value is an RGB color object.
 */
export function isRGBColor(value: unknown): value is RGBColor {
  return typeof value === 'object' && value !== null && (value as RGBColor).__type === 'rgb';
}

/**
 * Determines whether a value is an {@link HSLColor}.
 *
 * @param value - The value to test.
 * @returns `true` if the value is an HSL color object.
 */
export function isHSLColor(value: unknown): value is HSLColor {
  return typeof value === 'object' && value !== null && (value as HSLColor).__type === 'hsl';
}

/**
 * Determines whether a value is an {@link HWBColor}.
 *
 * @param value - The value to test.
 * @returns `true` if the value is an HWB color object.
 */
export function isHWBColor(value: unknown): value is HWBColor {
  return typeof value === 'object' && value !== null && (value as HWBColor).__type === 'hwb';
}

/**
 * Recursively traverses an object and converts any color objects
 * into platform-compatible color values.
 *
 * Supported color types:
 * - OKLCH (converted to hex on native, oklch(...) on web)
 * - RGB (converted to rgb/rgba string)
 * - HSL (converted to hsl/hsla string)
 * - HWB (converted to hwb/hwba string)
 *
 * Arrays and nested objects are processed recursively.
 *
 * @param obj - The value to process.
 * @returns A new value with all color objects resolved.
 */
function processColorObject(obj: unknown): unknown {
  if (isOklchColor(obj)) return serializeColor(obj);
  if (isRGBColor(obj)) return serializeRGBColor(obj);
  if (isHSLColor(obj)) return serializeHSLColor(obj);
  if (isHWBColor(obj)) return serializeHWBColor(obj);
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
 * converting all supported color objects into platform-compatible
 * React Native color values.
 *
 * Supported color types:
 * - OKLCH (converted to hex on native, oklch(...) on web)
 * - RGB (converted to rgb/rgba strings)
 * - HSL (converted to hsl/hsla strings)
 * - HWB (converted to hwb/hwba strings)
 *
 * This is the main entry point for color transformation and is used
 * internally by the styling pipeline before styles are passed to
 * React Native components.
 *
 * @typeParam T - The input object type.
 * @param obj - The object to process.
 * @returns A new object with all color objects resolved.
 *
 * @example
 * ```ts
 * processColors({
 *   color: oklch(0.65, 0.12, 348),
 *   backgroundColor: rgb(255, 0, 0),
 *   borderColor: hsl(120, 100, 50),
 * });
 * ```
 *
 * @remarks
 * - Web and native both support rgb/rgba, hsl/hsla, and hwb/hwba directly
 * - OKLCH is serialized to hex on native and oklch(...) on web
 * - Arrays and nested objects are processed recursively
 * - The returned type mirrors the runtime transformation via
 *   {@link ResolveColorObject}
 */
export function processColors<T>(obj: T): ResolveColorObject<T> {
  return processColorObject(obj) as ResolveColorObject<T>;
}
