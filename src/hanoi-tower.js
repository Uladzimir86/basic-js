const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let obj = {
    turns: 2**disksNumber-1,
    seconds: Math.floor(3600*(2**disksNumber-1)/turnsSpeed),    
  }

  return obj;//`{ turns: ${obj.turns}, seconds: ${obj.seconds} }`
  
};
