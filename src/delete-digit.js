const { NotImplementedError } = require('../extensions/index.js');

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
  return [...String(n)].reduce((max, item, ind, arr) => {
    const num = +[...arr.slice(0, ind), ...arr.slice(ind + 1)].join('');
    if (num > max) return num;
    return max;
  }, 0);
}

module.exports = {
  deleteDigit
};
