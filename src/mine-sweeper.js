const { NotImplementedError } = require('../extensions/index.js');

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
  const matrixArrLen = matrix.length;
  return matrix.map((arrItem, arrInd) => {
    return arrItem.map((item, ind) => {
      const prevRow = arrInd > 0 && ((matrix[arrInd - 1][ind - 1] || 0) + matrix[arrInd - 1][ind] + (matrix[arrInd - 1][ind + 1] || 0));
      const curRow = (matrix[arrInd][ind - 1] || 0) + (matrix[arrInd][ind + 1] || 0);
      const nextRow = (arrInd < matrixArrLen - 1) && ((matrix[arrInd + 1][ind - 1] || 0) + matrix[arrInd + 1][ind] + (matrix[arrInd + 1][ind + 1] || 0));
      return prevRow + curRow + nextRow;

    })
  })
}

module.exports = {
  minesweeper
};
