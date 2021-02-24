const CustomError = require("../extensions/custom-error");

module.exports = function transform(ar) {

  
  
  let arr = ar;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == `--discard-prev` && i == 0) {
      arr.splice(0,1);
      i = -1;
    }
    else if (arr[i] == `--double-prev` && i == 0) {
      arr.splice(0,1);
      i = -1;}
    else if (arr[i] == `--discard-prev` && i != 0) {
      arr.splice(i-1,2);
      i = i-2;}
    else if (arr[i] == `--double-prev` && i != 0) {arr.splice(i,1,arr[i-1]);}

    
    
    else if (arr[i] == `--discard-next` && i != arr.length-1) {
      arr.splice(i,2,' ');
    }
    else if (arr[i] == `--double-next` && i != arr.length-1) {arr.splice(i,1,arr[i+1]);}  
    
    else if (arr[i] == `--double-next` && i == arr.length-1) {arr.splice(i,1);}  
    else if (arr[i] == `--discard-next` && i == arr.length-1) {arr.splice(i,1);}
    
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      arr.splice(i,1);
      i-=1;
    }
  }
if(!Array.isArray(ar)) return "Error";
return arr;
}
