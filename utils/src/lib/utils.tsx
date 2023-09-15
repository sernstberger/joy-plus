export const formatPercentage = (value: number) => {
  const formattedValue = Number(value / 100).toLocaleString(undefined, {
    style: 'percent',
    // minimumFractionDigits: 2,
  });

  return formattedValue;
};
