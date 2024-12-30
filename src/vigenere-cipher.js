const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  codeA = 65;
  codeZ = 90;

  constructor (isDirect = true) {
    this.isDirect = isDirect;
  }

  errorCheck(value, key) {
    if (!value || !key) throw new Error('Incorrect arguments!');
  }

  encrypt(value, key) {
    this.errorCheck(value, key);
    const valueUp = value.toUpperCase();
    const keyUp = key.toUpperCase();
    const keyLen = key.length;
    let valueSpaces = 0;
    const encryptVal = [...valueUp].map((item, ind) => {
      const itemCode = item.codePointAt(0);
      if (itemCode < this.codeA || itemCode > this.codeZ) {
        valueSpaces += 1;
        return item;
      }
      const keyInd = ind - valueSpaces < keyLen ? ind - valueSpaces : (ind - valueSpaces) % keyLen;
      const currentCode = itemCode + keyUp.codePointAt(keyInd) - this.codeA;
      const count = this.codeZ - currentCode;
      const newCode = count < 0 ? this.codeA - count - 1 : currentCode;
      return String.fromCodePoint(newCode).toUpperCase();
    }) 
    return this.isDirect ? encryptVal.join('') : encryptVal.reverse().join('');
  }

  decrypt(value, key) {
    this.errorCheck(value, key);
    const valueUp = value.toUpperCase();
    const keyUp = key.toUpperCase();
    const keyLen = key.length;
    let valueSpaces = 0;
    const decryptVal = [...valueUp].map((item, ind) => {
      const itemCode = item.codePointAt(0);
      if (itemCode < this.codeA || itemCode > this.codeZ) {
        valueSpaces += 1;
        return item;
      }
      const keyInd = ind - valueSpaces < keyLen ? ind - valueSpaces : (ind - valueSpaces) % keyLen;
      const currentCode = itemCode - keyUp.codePointAt(keyInd) + this.codeA;
      const count = this.codeA - currentCode;
      const newCode = count > 0 ? this.codeZ - count + 1 : currentCode;
      return String.fromCodePoint(newCode).toUpperCase();
    }) 
    return this.isDirect ? decryptVal.join('') : decryptVal.reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
