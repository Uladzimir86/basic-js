const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 /* *	`str` это **строка**, которая будет повторена
*	`options` это **объект** опций, который содержит следующие свойства:
  -	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`*/
 
 
// устанавливает число повторений `str`
    function repeatTimes(sep='+') {
      
      let add = (additionRepeatTimes(options.additionSeparator) == 'undefined') ? '': additionRepeatTimes(options.additionSeparator);
      
      if (!isFinite(options.repeatTimes) || options.repeatTimes<= 1) sep ='';
      let sumStr = str + add + sep; 
      
      for(let i = 1; i < options.repeatTimes; i++) {
        if (i == options.repeatTimes-1) sumStr += str + add;
          else sumStr += str + add + sep;
      }  
      return sumStr;
    }

// `additionRepeatTimes` устанавливает 
// число повторений `addition`

    function additionRepeatTimes(addSep = '|') {
     
      if (!isFinite(options.additionRepeatTimes) || options.additionRepeatTimes <= 1) addSep = '';
      let sumAdd = options.addition+ addSep;

     for(let i = 1; i < options.additionRepeatTimes; i++) {
      if (i == options.additionRepeatTimes-1)  sumAdd += options.addition;
        else sumAdd += options.addition + addSep;
      }  
     return sumAdd;
    }

 return repeatTimes(options.separator)
};
  