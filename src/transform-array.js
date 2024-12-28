const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const res = [...arr];
  const finalArr = [];
 
  for (let ind = 0; ind < res.length; ind += 1) {
    const el = res[ind];
    if (el ===  '--discard-next') {
      res[ind + 1] = '';
      ind += 1;
    }
    else if (el ===  '--discard-prev') {
      if (ind !== 0 && res[ind - 1] !== '') finalArr.pop();
    }
    else if (el ===  '--double-next') {
      if (ind !== res.length - 1) finalArr.push(res[ind + 1]);
    }
    else if (el ===  '--double-prev') {
      if ( res[ind - 1] !== '' && ind !== 0) finalArr.push(res[ind - 1]);
    }
    else finalArr.push(el);
  };
  return finalArr;
}

module.exports = {
  transform
};
