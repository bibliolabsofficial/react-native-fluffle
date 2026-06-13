/**
 * Represents a color in the OKLCH color space.
 *
 * Components:
 * - `l` — Lightness (`0` to `1`)
 * - `c` — Chroma (color intensity/saturation)
 * - `h` — Hue angle in degrees (`0`–`360`)
 * - `alpha` — Opacity (`0` to `1`, defaults to `1`)
 *
 * @remarks
 * - Values are stored in their native OKLCH form and resolved at runtime
 *   by the color processing pipeline.
 * - On web platforms, colors are emitted as native CSS `oklch(...)` values.
 * - On native platforms, colors are converted to sRGB hexadecimal strings.
 *
 * @example
 * ```ts
 * const color: OklchColor = {
 *   __type: 'oklch',
 *   l: 0.65,
 *   c: 0.12,
 *   h: 348,
 *   alpha: 1,
 * };
 * ```
 *
 * @example
 * ```ts
 * const { oklch } = Colors;
 * const accent = oklch(0.65, 0.12, 348);
 * ```
 */
export interface OklchColor {
  /** Internal discriminator used for color detection and processing. */
  readonly __type: 'oklch';

  /** Perceived lightness, from `0` (black) to `1` (white). */
  l: number;

  /** Colorfulness (chroma). Higher values produce more vivid colors. */
  c: number;

  /** Hue angle in degrees, typically in the range `0–360`. */
  h: number;

  /** Opacity, from `0` (fully transparent) to `1` (fully opaque). */
  alpha: number;
}
