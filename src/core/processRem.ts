import type { BaseStyle, NestedStyles } from '../types/styles';
import type { RemKey } from '../constants/remKeys';
import { parseRem } from './rem';
import { REM_KEYS } from '../constants/remKeys';
import { isStyleObject } from '../utils';

type ResolveRemValue<T> = T extends `${number}rem` ? number : T;
type ResolveRemObject<T> = T extends object
  ? { [K in keyof T]: ResolveRemObject<T[K]> }
  : ResolveRemValue<T>;

function processObject(obj: Record<string, unknown>, path: string[] = []) {
  const out: Record<string, unknown> = {};

  for (const key in obj) {
    const value = obj[key];
    const fullPath = [...path, key].join('.');

    // Nested object
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      out[key] = processObject(value as Record<string, unknown>, [...path, key]);
      continue;
    }

    // Rem conversion
    if (typeof value === 'string' && REM_KEYS.has(fullPath as RemKey)) {
      const rem = parseRem(value);
      if (rem !== null) out[key] = rem;
      continue;
    }

    out[key] = value;
  }

  return out;
}

export function processRem<T extends NestedStyles | BaseStyle>(input: T): ResolveRemObject<T> {
  if (isStyleObject(input)) {
    return processObject(input as Record<string, unknown>) as ResolveRemObject<T>;
  }

  const out: Record<string, unknown> = {};

  for (const key in input) {
    const value = input[key];

    if (typeof value === 'object' && value !== null) {
      out[key] = processObject(value as NestedStyles);
    } else {
      out[key] = value;
    }
  }

  return out as ResolveRemObject<T>;
}
