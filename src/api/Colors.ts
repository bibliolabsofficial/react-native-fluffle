import type { OklchColor } from '../types/colors';

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

export const Colors = { oklch };
