import { PixelRatio, Platform } from 'react-native';

/**
 * Returns the computed root font size from the web document.
 *
 * This mirrors how CSS `rem` units behave in browsers by
 * reading the font size from the `<html>` element.
 *
 * @returns The computed root font size in pixels.
 *
 * @remarks
 * - Falls back to `16` when `document` is unavailable
 *   (e.g. during SSR or non-browser environments)
 * - Uses `window.getComputedStyle(document.documentElement)`
 *   to match actual browser rendering behavior
 */
function getWebRootFontSize() {
  if (typeof document === 'undefined') return 16;

  const fontSize = window.getComputedStyle(document.documentElement).fontSize;
  return Number.parseFloat(fontSize) || 16;
}

/**
 * Default root font size used on native platforms.
 *
 * React Native does not provide a browser-like root font size,
 * so `rem` units use a fixed baseline value instead.
 *
 * Current platform defaults:
 * - iOS: 14
 * - Android: 14
 *
 * @remarks
 * This value is only used for native platforms.
 * Web uses the computed root font size from the document instead.
 */
const NATIVE_BASE_FONT_SIZE = 14;

/**
 * Default base font size used as the root for `rem` calculations.
 *
 * Matches platform conventions:
 * - iOS: 14
 * - Android: 14
 * - Web: Computed from the root element's font size (default is typically 16)
 */
const BASE_FONT_SIZE = Platform.OS === 'web' ? getWebRootFontSize() : NATIVE_BASE_FONT_SIZE;

/** Internal root font size used for `rem` calculations. */
let rootFontSize = BASE_FONT_SIZE;

/**
 * Returns the computed base value for `1rem` in pixels.
 *
 * Platform behavior:
 * - Web: returns the configured root font size directly
 * - Native: applies the user’s font scaling preference via
 *   {@link PixelRatio.getFontScale()}
 *
 * @returns The pixel value representing `1rem`.
 *
 * @example
 * ```ts
 * const rem = getRemBase(); // e.g. 16 * fontScale
 * ```
 *
 * @remarks
 * - On web, this mirrors standard CSS `rem` behavior
 * - On native platforms, accessibility font scaling is applied automatically
 */
export function getRemBase() {
  if (Platform.OS === 'web') return rootFontSize;
  return rootFontSize * PixelRatio.getFontScale();
}

/** Matches valid `rem` strings (e.g. "1rem", "0.5rem", "-2rem"). */
const REM_REGEX = /^(-?\d*\.?\d+)rem$/;

/**
 * Parses a `rem` string and converts it into a numeric pixel value.
 *
 * @param value - A string in the form of `${number}rem`
 * @returns The computed pixel value, or `null` if the input is not a valid `rem`
 *
 * @example
 * ```ts
 * parseRem("2rem");   // -> 32 (if base is 16)
 * parseRem("1.5rem"); // -> 24
 * parseRem("10px");   // -> null
 * ```
 *
 * @remarks
 * - Applies device font scaling via {@link PixelRatio.getFontScale}
 */
export function parseRem(value: string): number | null {
  const match = value.match(REM_REGEX);
  if (!match) return null;

  return Number(match[1]) * getRemBase();
}
