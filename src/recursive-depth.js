const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 calculateDepth(arr, x=0) { 
    //let arr1 = arr; 
    let depth = x;
    
    console.log('arr'+arr);
    console.log('dep'+depth);
    let resArr = [];
    ///enrenlnglenw;gnb;wnih'oqgn3'n'3q4nqnbv
    if (depth <= 2) return this.calculateDepth(arr,x+1);
    
   function calc(arr, n)  {
        
    if (arr.length == 0) {
         resArr.push(n);}
      else  { arr.forEach((item,index,array) => { 
        
        
      if(Array.isArray(item) ) {console.log(item+'----'+n);
        calc(item, n+1);
      }
      if (index == array.length -1) {
        console.log(item+'if----+++'+n); 
        resArr.push(n);
      }
     
      
    })}}
   
 calc (arr, 1);
  
  console.log('resarr'+resArr);
    resArr.forEach(item => {if(depth < item) depth = item} ) 

   return depth;
 } 
}
