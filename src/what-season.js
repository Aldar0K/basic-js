const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

module.exports = {
  getSeason
};

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) 
  || (+date.toString().split(' ')[3] != date.getFullYear())) 
  throw new Error('Invalid date!');

  let month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 8) return 'autumn';
  if (month >= 5) return 'summer';
  else return 'spring';
}