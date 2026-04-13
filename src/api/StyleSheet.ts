import type { BaseStyle, NestedStyles } from "../types/styles";
import { StyleSheet as RNStyleSheet } from "react-native";

export namespace StyleSheet {
  type NamedStyles<T> = { [P in keyof T]: BaseStyle | NestedStyles };

  export function create<T extends NamedStyles<T>>(
    styles: T & NamedStyles<any>,
  ): T {
    return styles;
  }

  export const hairlineWidth = RNStyleSheet.hairlineWidth;
  export const flatten = RNStyleSheet.flatten;
  export const absoluteFillObject = RNStyleSheet.absoluteFillObject;
  export const absoluteFill = RNStyleSheet.absoluteFill;
}
