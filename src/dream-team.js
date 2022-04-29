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
  const validNames = members.filter(item => typeof item === 'string');
  if (validNames.length === 0) return false;
  
  return validNames
  .map(name => name.trim().split('')[0].toUpperCase())
  .sort((a,b) => a.charCodeAt() - b.charCodeAt())
  .join('');
}