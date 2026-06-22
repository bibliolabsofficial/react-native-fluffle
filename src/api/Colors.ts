import type { OklchColor, RGBColor, HSLColor, HWBColor } from '../types/colors';

/**
 * Creates a color in the OKLCH color space.
 *
 * OKLCH is a perceptually uniform color model that provides more predictable
 * lightness and saturation adjustments than RGB, HSL, or HSV.
 *
 * @param l - Lightness, from `0` (black) to `1` (white).
 * @param c - Chroma (color intensity). Higher values produce more vivid colors.
 * @param h - Hue angle in degrees, typically in the range `0–360`.
 * @param alpha - Opacity, from `0` (fully transparent) to `1` (fully opaque).
 * Defaults to `1`.
 *
 * @returns An {@link OklchColor} object that can be used in Fluffle style
 * definitions and will be resolved automatically by the styling pipeline.
 *
 * @example
 * ```ts
 * const { oklch } = Colors;
 *
 * const primary = oklch(0.65, 0.12, 348);
 * ```
 *
 * @example
 * ```ts
 * const overlay = Colors.oklch(0.2, 0, 0, 0.5);
 * ```
 *
 * @remarks
 * - On web platforms, colors are emitted as native CSS `oklch(...)` values.
 * - On native platforms, colors are converted to sRGB hexadecimal strings.
 * - Values are processed automatically when passed through
 *   {@link StyleSheet.create}.
 */
function oklch(l: number, c: number, h: number, alpha = 1): OklchColor {
  return { __type: 'oklch', l, c, h, alpha };
}

/**
 * Creates a color in the RGB color space.
 *
 * @param r - Red channel, from `0` to `255`.
 * @param g - Green channel, from `0` to `255`.
 * @param b - Blue channel, from `0` to `255`.
 * @param alpha - Opacity, from `0` (fully transparent) to `1` (fully opaque).
 * Defaults to `1`.
 *
 * @returns An {@link RGBColor} object that can be used in Fluffle style
 * definitions and will be resolved automatically by the styling pipeline.
 *
 * @example
 * ```ts
 * const { rgb } = Colors;
 *
 * const red = rgb(255, 0, 0);
 * const transparent = rgb(0, 0, 0, 0.5);
 * ```
 *
 * @remarks
 * - Colors are emitted as `rgb(...)` or `rgba(...)` strings depending on opacity.
 * - Both web and native platforms support this format natively.
 * - Values are processed automatically when passed through
 *   {@link StyleSheet.create}.
 */
function rgb(r: number, g: number, b: number, alpha = 1): RGBColor {
  return { __type: 'rgb', r, g, b, alpha };
}

/**
 * Creates a color in the HSL color space.
 *
 * @param h - Hue angle in degrees, typically in the range `0–360`.
 * @param s - Saturation percentage, from `0` to `100` (do not include the % symbol).
 * @param l - Lightness percentage, from `0` to `100` (do not include the % symbol).
 * @param alpha - Opacity, from `0` (fully transparent) to `1` (fully opaque).
 * Defaults to `1`.
 *
 * @returns An {@link HSLColor} object that can be used in Fluffle style
 * definitions and will be resolved automatically by the styling pipeline.
 *
 * @example
 * ```ts
 * const { hsl } = Colors;
 *
 * const red = hsl(0, 100, 50);
 * const transparent = hsl(120, 100, 50, 0.5);
 * ```
 *
 * @remarks
 * - Colors are emitted as `hsl(...)` or `hsla(...)` strings depending on opacity.
 * - Both web and native platforms support this format natively.
 * - Values are processed automatically when passed through
 *   {@link StyleSheet.create}.
 */
function hsl(h: number, s: number, l: number, alpha = 1): HSLColor {
  return { __type: 'hsl', h, s, l, alpha };
}

/**
 * Creates a color in the HWB color space.
 *
 * @param h - Hue angle in degrees, typically in the range `0–360`.
 * @param w - Whiteness percentage, from `0` to `100` (do not include the % symbol).
 * @param b - Blackness percentage, from `0` to `100` (do not include the % symbol).
 * @param alpha - Opacity, from `0` (fully transparent) to `1` (fully opaque).
 * Defaults to `1`.
 *
 * @returns An {@link HWBColor} object that can be used in Fluffle style
 * definitions and will be resolved automatically by the styling pipeline.
 *
 * @example
 * ```ts
 * const { hwb } = Colors;
 *
 * const navyBlue = hwb(240, 0, 33);
 * const transparent = hwb(0, 20, 20, 0.5);
 * ```
 *
 * @remarks
 * - Colors are emitted as `hwb(...)` or `hwba(...)` strings depending on opacity.
 * - Both web and native platforms support this format natively.
 * - Values are processed automatically when passed through
 *   {@link StyleSheet.create}.
 */
function hwb(h: number, w: number, b: number, alpha = 1): HWBColor {
  return { __type: 'hwb', h, w, b, alpha };
}

export const Colors = { oklch, rgb, hsl, hwb };
