import type { BaseStyle, NestedStyles } from '../types/styles';
import { StyleSheet as RNStyleSheet } from 'react-native';
import { processRem } from '../core/processRem';
import { setRootFontSize } from '../core/rem';

export namespace StyleSheet {
  type NamedStyles<T> = { [P in keyof T]: BaseStyle | NestedStyles };
  type ResolveRemValue<T> = T extends `${number}rem` ? number : T;
  type ResolveRemObject<T> = T extends object
    ? { [K in keyof T]: ResolveRemObject<T[K]> }
    : ResolveRemValue<T>;

  /** An identity function for creating style sheets. */
  export function create<T extends NamedStyles<T>>(
    /**
     * The extra `& NamedStyles<any>` here helps TypeScript catch typos: e.g.,
     * the following code would not error with `styles: T | NamedStyles<T>`
     * but would error with `styles: T & NamedStyles<any>`:
     *
     * ```ts
     * StyleSheet.create({
     *  someComponent: { marginLeft: 1, magrinRight: 1 },
     * });
     * ```
     */
    styles: T & NamedStyles<any>
  ): ResolveRemObject<T> {
    return processRem(styles);
  }

  export const configRem = { setRootFontSize };

  export const hairlineWidth = RNStyleSheet.hairlineWidth;
  export const flatten = RNStyleSheet.flatten;
  export const absoluteFill = RNStyleSheet.absoluteFill;
}
