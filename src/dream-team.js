const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

module.exports = {
  createDreamTeam
};

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const newArr = [];
  
  members.map(name => typeof name === 'string' ? 
  newArr.push(name.trim().split('')[0].toUpperCase()) : false);
  
  return newArr.sort().join('');
}