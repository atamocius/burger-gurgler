/**
 * Converts cents to peso and formats it for display.
 * @see https://blog.abelotech.com/posts/number-currency-formatting-javascript/
 * @param {number} cents The amount to display, in cents.
 */
export function toPesoFormat(cents) {
  return `₱ ${(cents / 100)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}
