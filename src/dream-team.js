const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];

  if (!Array.isArray(members)) return false;

  members.forEach(item => {
    if (typeof item == 'string') arr.push(item.trim()[0].toUpperCase())
  })
  
  if (arr.length > 0) return arr.sort().join('');
    else return false;
};
