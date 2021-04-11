/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let tmp = 0;
  let number = 0;

  const digits = n.toString(10).split('').map((item) => parseInt(item, 10));
  tmp = digits.reduce((sum, current) => sum + current, 0);

  if (String(tmp).split('').length === 1) {
    return tmp;
  } number = tmp;
  return getSumOfDigits(number);
}

module.exports = getSumOfDigits;
