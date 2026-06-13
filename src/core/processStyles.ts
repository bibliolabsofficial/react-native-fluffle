import type { ResolveColorObject } from './processColors';
import type { ResolveRemObject } from './processRem';
import { processColors } from './processColors';
import { processRem } from './processRem';

/**
 * Resolves all custom style extensions into React Native-compatible values.
 *
 * This type applies the same transformations performed at runtime by
 * {@link processStyles}:
 *
 * 1. {@link ResolveColorObject} converts {@link OklchColor} values into
 *    React Native {@link import('react-native').ColorValue} types.
 * 2. {@link ResolveRemObject} converts `rem` string values into numbers.
 *
 * @typeParam T - The style object type to resolve.
 */
export type ResolveStyleObject<T> = ResolveRemObject<ResolveColorObject<T>>;

/**
 * Processes a style object by resolving all custom style extensions.
 *
 * This is the final step of the style transformation pipeline and combines:
 *
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
 *   },
 * });
 * ```
 *
 * @remarks
 * Runtime transformations:
 * - OKLCH colors are converted into platform-compatible color values
 * - `rem` values are converted into numeric pixel values
 *
 * The returned type mirrors these transformations through
 * {@link ResolveStyleObject}.
 */
export function processStyles<T>(
  styles: T
): ResolveStyleObject<T> {
  const stylesWithColors = processColors(styles);
  const finalStyleSheet = processRem(stylesWithColors);

  return finalStyleSheet;
}
