const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const resultsArr = [];

  for (let i = 0; i < n.toString().length; i++) {
    const currentArr = n.toString().split('');
    currentArr[i] = '';
    resultsArr.push(currentArr.join(''));
  }
  
  return Math.max(...resultsArr);
}

module.exports = {
  deleteDigit
};
