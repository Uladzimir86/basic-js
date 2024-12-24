const { NotImplementedError } = require('../extensions/index.js');

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
  let code = '';
  let count = 1;
  const strLength = str.length;
  for (let i = 1; i < strLength; i += 1) {
    const letter1 = str[i - 1];
    const letter2 = str[i];
    if (letter1 === letter2) count += 1;
    else {
      code += `${count > 1 ? count : ''}${letter1}`;
      count = 1;
    }
    if (i + 1 === strLength) code += `${count > 1 ? count : ''}${letter2}`
  }
  return code;
}

module.exports = {
  encodeLine
};
