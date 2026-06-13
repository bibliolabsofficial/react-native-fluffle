import type { OklchColor } from './colors';

export type ColorKeys =
  | 'color'
  | 'backgroundColor'
  | 'borderColor'
  | 'borderTopColor'
  | 'borderRightColor'
  | 'borderBottomColor'
  | 'borderLeftColor'
  | 'borderStartColor'
  | 'borderEndColor'
  | 'borderBlockColor'
  | 'borderBlockEndColor'
  | 'borderBlockStartColor'
  | 'shadowColor'
  | 'textDecorationColor'
  | 'textShadowColor'
  | 'tintColor'
  | 'overlayColor'
  | 'outlineColor'


export type WithOklch<T> = {
  [K in keyof T]: K extends ColorKeys ? T[K] | OklchColor : T[K];
};
