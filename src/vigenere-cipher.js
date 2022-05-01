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
  constructor (machineType = true) {
    this.machineType = machineType;
  }

  encrypt(message, key) {
    if ((typeof message === 'undefined' || typeof key === 'undefined' || message === null || key === null)) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toLowerCase();
    key = key.toLowerCase();

    let result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let messageLength = message.length;
    let keyLength = key.length;

    if (messageLength < keyLength) {
      key = key.slice(0, messageLength);
    }

    if (messageLength > keyLength) {
      let diffLength = Math.ceil(messageLength / keyLength);
      key = key.repeat(diffLength).slice(0, messageLength);
    }

    let messageArr = message.split('');
    let keyArr = key.split('');

    messageArr.forEach(char => {
      let indexOfCharInAlphabet = alphabet.indexOf(char);
      if (indexOfCharInAlphabet < 0) {
        result += char;
      } else {
        result += alphabet.charAt((indexOfCharInAlphabet + alphabet.indexOf(keyArr.shift())) % alphabet.length);
      }
    });

    result = result.toUpperCase();

    return (this.machineType) ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if ((typeof message === 'undefined' || typeof key === 'undefined' || message === null || key === null)) {
      throw new Error('Incorrect arguments!')
    }

    message = message.toLowerCase();
    key = key.toLowerCase();

    let result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let messageLength = message.length;
    let keyLength = key.length;

    if (messageLength < keyLength) {
      key = key.slice(0, messageLength);
    }

    if (messageLength > keyLength) {
      let diffLength = Math.ceil(messageLength / keyLength);
      key = key.repeat(diffLength).slice(0, messageLength);
    }

    let messageArr = message.split('');
    let keyArr = key.split('');

    messageArr.forEach(char => {
      let indexOfCharInAlphabet = alphabet.indexOf(char);
      if (indexOfCharInAlphabet < 0) {
        result += char;
      } else {
        result += alphabet.charAt((indexOfCharInAlphabet + alphabet.length - alphabet.indexOf(keyArr.shift())) % alphabet.length);
      }
    });

    result = result.toUpperCase();

    return (this.machineType) ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
