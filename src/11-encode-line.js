/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      count = 1;
    } else if ((i === str.length - 1) && (str[i] === str[i - 1])) {
      count += 1;
      result.push(count + str[i]);
    } else if ((i === str.length - 1) && (str[i] !== str[i - 1])) {
      if (count > 1) {
        result.push(count + str[i - 1]);
      } else if (count === 1) {
        result.push(str[i - 1]);
      }
      result.push(str[i]);
    } else if (str[i] === str[i - 1]) {
      count += 1;
    } else if (str[i] !== str[i - 1]) {
      if (count > 1) {
        result.push(count + str[i - 1]);
        count = 1;
      } else if (count === 1) {
        result.push(str[i - 1]);
      }
    }
  }

  return result.join('');
}
// const tmp = new Map();
// const result = [];

// for (let i = 0; i < str.length; i++) {
//   if (!tmp.has(str[i])) {
//     tmp.set(str[i], 0);
//   }
//   tmp.set(str[i], tmp.get(str[i]) + 1);
// }

// tmp.forEach((value, key) => {
//   if (value > 1) {
//     result.push(`${value}${key}`);
//   } if (value === 1) {
//     result.push(key);
//   }
// });
// return result.join('');

module.exports = encodeLine;
