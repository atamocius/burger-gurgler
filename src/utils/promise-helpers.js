/**
 * A promise wrapper for `setTimeout`.
 * @param {number} ms Wait time in milliseconds
 * @returns
 */
export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
