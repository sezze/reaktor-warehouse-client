/**
 * Create a range from 0 to 'a' (exclusive), or, if 'b' is specified, 'a' - 'b' (inclusive)
 */
export const range = (a: number, b?: number) => {
  const start = b !== undefined ? a : 0;
  const end = b !== undefined ? b + 1 : a;

  return [...Array(end - start).keys()].map((i) => i + start);
};
