const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matr) {
  let cats = 0;

  for (i = 0; i < matr.length; i++) {
    let result = matr[i].filter((item) => item == "^^");
    cats += result.length;
  }

  return cats;
}

