const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 calculateDepth(arr) {
    let depth = 1;
    let n=0
   if(Array.isArray(arr)) {
     
     arr.forEach((item,index,array) => { 
       if(Array.isArray(item)) depth+=this.calculateDepth(item);
    })
     
   }
  
   return depth;
 } 
}
