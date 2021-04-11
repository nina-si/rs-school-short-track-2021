/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let mid = Math.floor((start + end) / 2);

  for (let i = 0; i < array.length; i++) {
    if (array[mid] !== value) {
      if (value < array[mid]) end = mid;
      else start = mid;
      mid = Math.floor((start + end) / 2);
    }

    if (array[mid] === value) return mid;
  }

  return mid;
}

module.exports = findIndex;
