import { Entries } from './types';

/**
 * Filters `null` and `undefined` from an array
 * @param arr an array
 * @returns the same array with `null` and `undefined` removed
 */
export function removeNulls<T>(arr: (T | null | undefined)[]) {
  return arr.filter((x): x is T => x != null);
}

export function entries<T>(obj: T) {
  return Object.entries(obj) as Entries<T>;
}

export function keys<T>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}
