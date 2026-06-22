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

/**
 * Represents a color in the RGB color space.
 *
 * Components:
 * - `r` — Red channel (`0` to `255`)
 * - `g` — Green channel (`0` to `255`)
 * - `b` — Blue channel (`0` to `255`)
 * - `alpha` — Opacity (`0` to `1`, defaults to `1`)
 *
 * @remarks
 * - Values are emitted as RGB or RGBA strings depending on opacity
 * - Both web and native platforms support this format natively
 *
 * @example
 * ```ts
 * const { rgb } = Colors;
 * const white = rgb(255, 255, 255);
 * const transparent = rgb(0, 0, 0, 0.5);
 * ```
 */
export interface RGBColor {
  /** Internal discriminator used for color detection and processing. */
  readonly __type: 'rgb';

  /** Red channel, from `0` to `255`. */
  r: number;

  /** Green channel, from `0` to `255`. */
  g: number;

  /** Blue channel, from `0` to `255`. */
  b: number;

  /** Opacity, from `0` (fully transparent) to `1` (fully opaque). */
  alpha: number;
}

/**
 * Represents a color in the HSL color space.
 *
 * Components:
 * - `h` — Hue angle in degrees (`0`–`360`)
 * - `s` — Saturation (`0` to `100`)
 * - `l` — Lightness (`0` to `100`)
 * - `alpha` — Opacity (`0` to `1`, defaults to `1`)
 *
 * @remarks
 * - Values are emitted as HSL or HSLA strings depending on opacity
 * - Both web and native platforms support this format natively
 *
 * @example
 * ```ts
 * const { hsl } = Colors;
 * const red = hsl(0, 100, 50);
 * const transparent = hsl(120, 100, 50, 0.5);
 * ```
 */
export interface HSLColor {
  /** Internal discriminator used for color detection and processing. */
  readonly __type: 'hsl';

  /** Hue angle in degrees, typically in the range `0–360`. */
  h: number;

  /** Saturation percentage, from `0` to `100`. */
  s: number;

  /** Lightness percentage, from `0` to `100`. */
  l: number;

  /** Opacity, from `0` (fully transparent) to `1` (fully opaque). */
  alpha: number;
}

/**
 * Represents a color in the HWB color space.
 *
 * Components:
 * - `h` — Hue angle in degrees (`0`–`360`)
 * - `w` — Whiteness (`0` to `100`)
 * - `b` — Blackness (`0` to `100`)
 * - `alpha` — Opacity (`0` to `1`, defaults to `1`)
 *
 * @remarks
 * - Values are emitted as HWB or HWBA strings depending on opacity
 * - Both web and native platforms support this format natively
 *
 * @example
 * ```ts
 * const { hwb } = Colors;
 * const navyBlue = hwb(240, 0, 33);
 * const transparent = hwb(0, 20, 20, 0.5);
 * ```
 */
export interface HWBColor {
  /** Internal discriminator used for color detection and processing. */
  readonly __type: 'hwb';

  /** Hue angle in degrees, typically in the range `0–360`. */
  h: number;

  /** Whiteness percentage, from `0` to `100`. */
  w: number;

  /** Blackness percentage, from `0` to `100`. */
  b: number;

  /** Opacity, from `0` (fully transparent) to `1` (fully opaque). */
  alpha: number;
}
