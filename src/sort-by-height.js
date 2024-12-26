const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(newArr) {
  const arr = [...newArr];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      let a = j;
      while(arr[a] === -1 && a > 0) {
        a -= 1;
      }
      if (arr[a] === -1) continue;

      let b = j + 1;
      while(arr[b] === -1 && b < i - 1) {
        b += 1;
      }
      if (arr[b] === -1) continue;
      if (arr[a] > arr[b]) {
        const max = arr[a];
        arr[a] = arr[b];
        arr[b] = max;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
