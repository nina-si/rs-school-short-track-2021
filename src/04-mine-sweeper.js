/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let count = 0;
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix.slice(0));
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j === 0) {
          count = matrix[i][j + 1] + matrix[i + 1][j] + matrix[i + 1][j + 1];
          result[i][j] = count;
          count = 0;
        } else if (j === matrix[i].length - 1) {
          count = matrix[i][j - 1] + matrix[i + 1][j] + matrix[i + 1][j - 1];
          result[i][j] = count;
          count = 0;
        } else {
          count = matrix[i][j - 1] + matrix[i][j + 1] + matrix[i + 1][j]
              + matrix[i + 1][j - 1] + matrix[i + 1][j + 1];
          result[i][j] = count;
          count = 0;
        }
      }
    } else if (i === matrix.length - 1) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j === 0) {
          count = matrix[i][j + 1] + matrix[i - 1][j] + matrix[i - 1][j + 1];
          result[i][j] = count;
          count = 0;
        } else if (j === matrix[i].length - 1) {
          count = matrix[i][j - 1] + matrix[i - 1][j] + matrix[i - 1][j - 1];
          result[i][j] = count;
          count = 0;
        } else {
          count = matrix[i][j - 1] + matrix[i][j + 1] + matrix[i - 1][j]
               + matrix[i - 1][j - 1] + matrix[i - 1][j + 1];
          result[i][j] = count;
          count = 0;
        }
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j === 0) {
          count = matrix[i][j + 1] + matrix[i - 1][j] + matrix[i - 1][j + 1]
                + matrix[i + 1][j] + matrix[i + 1][j + 1];
          result[i][j] = count;
          count = 0;
        } else if (j === matrix[i].length - 1) {
          count = matrix[i][j - 1] + matrix[i - 1][j] + matrix[i - 1][j - 1]
                + matrix[i + 1][j] + matrix[i + 1][j - 1];
          result[i][j] = count;
          count = 0;
        } else {
          count = matrix[i][j - 1] + matrix[i][j + 1] + matrix[i - 1][j]
              + matrix[i - 1][j - 1] + matrix[i - 1][j + 1]
              + matrix[i + 1][j] + matrix[i + 1][j - 1] + matrix[i + 1][j + 1];
          result[i][j] = count;
          count = 0;
        }
      }
    }
  }
  return result;
}

module.exports = minesweeper;
