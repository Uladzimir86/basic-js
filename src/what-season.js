const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));
console.log('d ', getSeason(new Date()));
console.log('deeperFakeDate: ', getSeason(deeperFakeDate));

function getSeason(date) {
  console.log('date: ', date[Symbol.toStringTag], date.hasOwnProperty('getDay'));
  if (!date) return 'Unable to determine the time of year!'; 
  try {
    if (!(date.constructor === Date)) throw new Error(); 
    if (date[Symbol.toStringTag]) throw new Error(); 
    const month = date.getMonth();
    // const time = date.getTime();
    // console.log('time: ', time);

    switch (month) {
      case 0 : 
      case 1 : 
      case 11: 
        return 'winter';
      case 2 : 
      case 3 : 
      case 4: 
        return 'spring';
      case 5 : 
      case 6 : 
      case 7: 
        return 'summer';
      case 8 : 
      case 9 : 
      case 10: 
        return 'autumn';
      default:
        throw new Error();
    }
  } catch(err) {
      throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
