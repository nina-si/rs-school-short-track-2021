/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] in obj1) {
      obj1[arr1[i]] += 1;
    } else {
      obj1[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] in obj2) {
      obj2[arr2[i]] += 1;
    } else {
      obj2[arr2[i]] = 1;
    }
  }

  Object.keys(obj1).forEach((key) => {
    if (key in obj2) {
      if (obj1[key] < obj2[key]) {
        count += obj1[key];
      } else count += obj2[key];
    }
  }, obj1);

  return count;
}

module.exports = getCommonCharacterCount;
