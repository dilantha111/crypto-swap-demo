export const getTokenValue = (ratio: number, inputValue: number) => {
  return parseFloat((inputValue * ratio).toFixed(5));
};
