const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const count = (str, char) => str.split(char).length - 1;

  const min = (char) => Math.min(count(s1, char), count(s2, char));

  return [...new Set(s1)].reduce((counter, current) => counter + min(current), 0);
}

module.exports = {
  getCommonCharacterCount
};
