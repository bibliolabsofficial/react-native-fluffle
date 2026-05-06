import { PixelRatio, Platform } from 'react-native';

/**
 * Default base font size used as the root for `rem` calculations.
 *
 * Matches platform conventions:
 * - iOS: 17
 * - Android: 14
 */
const BASE_FONT_SIZE = Platform.OS === 'ios' ? 17 : 14;

/**
 * Internal root font size used for `rem` calculations.
 * Can be overridden via {@link setRootFontSize}.
 */
let root = BASE_FONT_SIZE;

/**
 * Sets the root font size used to resolve `rem` units.
 *
 * @param value - The base font size in logical pixels.
 *
 * @example
 * ```ts
 * StyleSheet.configRem.setRootFontSize(16);
 * ```
 *
 * @remarks
 * This should be called once during app initialization (e.g. in the root layout).
 */
export function setRootFontSize(value: number) {
  root = value;
}

/**
 * Returns the computed base value for `1rem` in pixels.
 *
 * This includes the user’s font scaling preference via
 * {@link PixelRatio.getFontScale}.
 *
 * @returns The pixel value representing `1rem`.
 *
 * @example
 * ```ts
 * const rem = getRemBase(); // e.g. 16 * fontScale
 * ```
 */
export function getRemBase() {
  return root * PixelRatio.getFontScale();
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
 * - Uses the current root font size set via {@link setRootFontSize}
 * - Applies device font scaling via {@link PixelRatio.getFontScale}
 */
export function parseRem(value: string): number | null {
  const match = value.match(REM_REGEX);
  if (!match) return null;

  return Number(match[1]) * getRemBase();
}
