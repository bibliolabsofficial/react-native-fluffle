import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { WithRem } from './rem';

/**
 * Represents a React Native style object with support for `rem` values.
 *
 * This type extends the built-in React Native style types (`ViewStyle`,
 * `TextStyle`, and `ImageStyle`) to allow `rem` units on supported properties.
 *
 * @remarks
 * - Only specific properties (defined in `REM_KEYS`) accept `rem` values
 * - All `rem` values are resolved to numbers at runtime
 */
export type BaseStyle = WithRem<ViewStyle> | WithRem<TextStyle> | WithRem<ImageStyle>;

/**
 * Represents a recursively nested style object.
 *
 * This allows grouping styles in a hierarchical structure:
 *
 * @example
 * ```ts
 * const styles = {
 *   container: {
 *     header: {
 *       padding: "1rem",
 *     },
 *   },
 * };
 * ```
 *
 * @remarks
 * - Each leaf node must be a {@link BaseStyle}
 * - Nested objects are processed recursively by the style system
 */
export type NestedStyles = { [key: string]: BaseStyle | NestedStyles };
