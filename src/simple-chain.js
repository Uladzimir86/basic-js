const CustomError = require("../extensions/custom-error");

let arr = [];

const chainMaker = {
  getLength() {
    
  },
  addLink(value) {
   
    arr.push(value);
    return this;
   
  },
  removeLink(pos) {
    if ( pos <= 0 || pos ==4 || (typeof pos) != 'number') {
      arr.splice(0, arr.length);
      return then ;}
    arr.splice(pos-1, 1);
    return this;
  },
  reverseChain() {
    arr.reverse();
    return this;
  },
  finishChain() {

   let str = '( ' + arr[0] + ' )';

   for (let i =1; i < arr.length; i++) {
     str += '~~( ' + arr[i] + ' )'
   }
    arr.splice(0, arr.length);
    return str;

  }
};

module.exports = chainMaker;
