/**
 * This function add commas to the given number
 * In most cases you'll use this function to display the returned number but not manipulate
 *
 * @param {number} num Specify how many digits to show after the dot
 * @return {*} The function returns the given number with commas (ex. 1000 -> 1,000)
 */
export const returnNumberWithCommas = (num, precision = 2) => {
  return parseFloat(+num).toLocaleString(undefined, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
};
