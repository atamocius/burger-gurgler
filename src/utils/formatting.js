/**
 * Converts cents to peso and formats it for display.
 * @param {number} cents The amount to display, in cents.
 */
export function toAmountFormat(cents) {
  return `₱ ${(cents / 100).toFixed(2)}`;
}
