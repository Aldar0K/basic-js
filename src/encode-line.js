const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const result = [];
  const strArr = str.split('');
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === strArr[i+1]) {
      count++;
    } else {
      result.push(count === 1 ? strArr[i] : `${count}${strArr[i]}`);
      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
