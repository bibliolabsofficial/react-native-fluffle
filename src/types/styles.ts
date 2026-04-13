import type { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type BaseStyle = ViewStyle | TextStyle | ImageStyle;
export type NestedStyles = { [key: string]: BaseStyle | NestedStyles };
