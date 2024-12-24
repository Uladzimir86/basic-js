const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options;
  
  const makeTemplate = (string, sep, count) => {
    let finalString = string;
    for (let i = 1; i < count; i += 1) {
      finalString += sep + string;
    }
    return finalString;
  }
  const additionString = `${str}${addition !== undefined ? makeTemplate(addition, additionSeparator, additionRepeatTimes) : ''}`;

  return makeTemplate(additionString, separator, repeatTimes);
}

module.exports = {
  repeater
};
