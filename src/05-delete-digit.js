/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString(10).split('');
  const result = [];
  let additional = digits.slice(0);

  for (let i = 0; i < digits.length; i++) {
    additional.splice(i, 1);
    result.push(Number(additional.join('')));
    additional = digits.slice(0);
  }

  result.sort((a, b) => a - b);

  return result[result.length - 1];
}

module.exports = deleteDigit;
