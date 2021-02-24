const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (typeof date == 'undefined') return 'Unable to determine the time of year!';
  if (!(typeof date == 'object')) return "Error";
  if (date.hasOwnProperty('toString') && date.hasOwnProperty('getMonth') && getMilliseconds) return "Error"; 
  

  let month =  date.getMonth();



  if (month == 11 || month == 0 || month == 1) return 'winter';
    else if (month == 2 || month == 3 || month == 4) return 'spring';
    else if (month == 5 || month == 6 || month == 7) return 'summer';
    else if (month == 8 || month == 9 || month == 10) return 'autumn';
      else return "Unable to determine the time of year!";

   

};
