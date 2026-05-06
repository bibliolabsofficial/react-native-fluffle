import type { RemKey } from '../constants/remKeys';

type RemValue = `${number}rem`;

export type WithRem<T> = {
  [K in keyof T]: K extends RemKey ? T[K] | RemValue : T[K];
};
