export const getColor = (isPrimary, isPrimaryRow) => {
  const firstColor = isPrimaryRow ? 'white' : 'red';
  const secoundColor = isPrimaryRow ? 'red' : 'white';
  return isPrimary ? firstColor : secoundColor;
};
