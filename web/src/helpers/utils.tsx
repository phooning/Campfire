/**
 * Takes numbers larger than 999 and truncates it with 'k' at the end.
 * n = 1820 => 1.8k
 * n = 1820, p = 2 => 1.82k
 * @param n number
 * @param p places
 */
export const truncateNumber = (n: number, p = 1): string | number => {
  const trunc = n > 999 ? `${(n / 1000).toFixed(p)}k` : n;
  const lastDigit = trunc.toString().slice(-2);
  if (lastDigit === "0k" && p === 1) {
    return `${trunc.toString().slice(0, -3)}k`;
  }
  return trunc;
};

export default { truncateNumber };
