const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const domainsObj = {};

  function getKey (str) {
    return `.${str.split('.').reverse().join('.')}`;
  }

  for (let domain of domains) {
    while (domain) {
      let key = getKey(domain);
      domainsObj[key] = (domainsObj[key] || 0) + 1;
      domain = domain.includes('.') ? domain.substr(domain.indexOf('.') + 1) : '';
    }
  }

  return domainsObj;
}

module.exports = {
  getDNSStats
};
