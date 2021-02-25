const CustomError = require("../extensions/custom-error");
let arr = [];
const chainMaker = {
  getLength() {
    
  },
  addLink(value) {
    arr.push(value);
  },
  removeLink(pos) {
    arr.split(pos, 1);
  },
  reverseChain() {
    arr.reverse();
  },
  finishChain() {

   let str = '( ' + arr[0] + ' )';

   for (let i =1; i < arr.length; i++) {
     str += '~~( ' + arr[i] + ' )'
   }

    return str;
    
  }
};

module.exports = chainMaker;
