import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { WithRem } from './rem';

export type BaseStyle = WithRem<ViewStyle> | WithRem<TextStyle> | WithRem<ImageStyle>;
export type NestedStyles = { [key: string]: BaseStyle | NestedStyles };
