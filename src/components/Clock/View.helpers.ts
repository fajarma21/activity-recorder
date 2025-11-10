export const normalizeDigit = (value: number) => {
  return `${value <= 9 ? '0' : ''}${value}`;
};
