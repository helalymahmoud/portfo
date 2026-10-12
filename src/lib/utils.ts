/**
 * Join conditional class names. Small local helper so we don't pull in
 * an extra dependency for something this trivial.
 */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ')
}
