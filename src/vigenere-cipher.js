const CustomError = require("../extensions/custom-error");
let map = new Map();
let arrEN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
for (i = 0; i <=25; i++) {
  map.set(i, arrEN[i]);
  map.set(arrEN[i], i);
}

class VigenereCipheringMachine {

  constructor(x) {
    this.y=true;//**прямая** модификация
    if(x == false)   this.y = false;
  }

  encrypt(message, key) {

    while (message.length > key.length) {  //увеличиваем длину ключа до длины строки
      key += key; 
    } 
// делаем из строк массив заглавных букв
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let result = [];

    for (let i = 0; i < messageArr.length; i++) {
      if(!map.has(messageArr[i])) {
        result.push(messageArr[i]);
        messageArr.splice(i,1);
        i -= 1; 
      }
       else {
         let number  = (map.get(messageArr[i]) + map.get(keyArr[i]))%26; //цифровой код буквы
         result.push(map.get(number)); //буква-шифр
       }
    }

    if (this.y == true) return result.join('');
      else return result.reverse().join('');
    
  }    
  decrypt(message, key) {
    while (message.length > key.length) {  //увеличиваем длину ключа до длины строки
      key += key; 
    } 
// делаем из строк массив заглавных букв
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let result = [];

    for (let i = 0; i < messageArr.length; i++) {
      if(!map.has(messageArr[i])) {
        result.push(messageArr[i]);
        messageArr.splice(i,1);
        i -= 1; 
      }
       else {
         let number  = (map.get(messageArr[i]) - map.get(keyArr[i]) + 26)%26; //цифровой код расшифрованной буквы
         result.push(map.get(number)); //расшифрованная буква
       }
    }

    if (this.y == true) return result.join('');
      else return result.reverse().join('');
  }





}

module.exports = VigenereCipheringMachine;
