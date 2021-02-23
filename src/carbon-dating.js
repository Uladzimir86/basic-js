const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {

  if(typeof x == 'string') {
    if (isFinite(x)) {
      if (+x > 0 && +x <=15)
    return Math.ceil(Math.log(15/+x)*5730/0.693);
    else return false; 
    }
   else return false; 
  }
  else return false;
}
