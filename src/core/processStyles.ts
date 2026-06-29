import type { ResolveColorObject } from './processColors';
import type { ResolveRemObject } from './processRem';
import type { ResolveShorthandObject } from '../types/shorthands';
import { processColors } from './processColors';
import { processRem } from './processRem';
import { processShorthands } from './processShorthands';

/**
 * Resolves all custom style extensions into React Native-compatible values.
 *
 * This type applies the same transformations performed at runtime by
 * {@link processStyles}:
 *
 * 1. {@link ResolveShorthandObject} expands shorthand values into long-form keys.
 * 2. {@link ResolveColorObject} converts {@link OklchColor} values into
 *    React Native {@link import('react-native').ColorValue} types.
 * 3. {@link ResolveRemObject} converts `rem` string values into numbers.
 *
 * @typeParam T - The style object type to resolve.
 */
/**
 * Resolves all custom style extensions into React Native-compatible values.
 *
 * This type applies the same transformations performed at runtime:
 * 1. Shorthand expansion (e.g., `margin: { x: 10 }` → `marginLeft: 10, marginRight: 10`)
 * 2. Color resolution (custom colors → React Native ColorValue)
 * 3. Rem resolution (rem strings → numbers)
 */
export type ResolveStyleObject<T> = ResolveRemObject<ResolveColorObject<ResolveShorthandObject<T>>>;

/**
 * Processes a style object by resolving all custom style extensions.
 *
 * This is the final step of the style transformation pipeline and combines:
 *
 * - Shorthand expansion via {@link processShorthands}
 * - Color processing via {@link processColors}
 * - `rem` resolution via {@link processRem}
 *
 * The returned object contains only values that are directly consumable by
 * React Native components.
 *
 * @typeParam T - The input style object type.
 * @param styles - The style object to process.
 * @returns A new style object with all custom values resolved.
 *
 * @example
 * ```ts
 * processStyles({
 *   title: {
 *     color: Colors.oklch(0.65, 0.12, 348),
 *     fontSize: '1.5rem',
 *     margin: { x: '1rem', y: '2rem' },
 *   },
 * });
 * ```
 *
 * @remarks
 * Runtime transformations:
 * - Shorthand properties are expanded (e.g., `margin: { x: 10 }` → `marginLeft: 10, marginRight: 10`)
 * - OKLCH colors are converted into platform-compatible color values
 * - `rem` values are converted into numeric pixel values
 *
 * The returned type mirrors these transformations through
 * {@link ResolveStyleObject}.
 */
export function processStyles<T>(
  styles: T
): ResolveStyleObject<T> {
  const stylesWithShorthands = processShorthands(styles);
  const stylesWithColors = processColors(stylesWithShorthands);
  const finalStyleSheet = processRem(stylesWithColors);

  return finalStyleSheet;
}
