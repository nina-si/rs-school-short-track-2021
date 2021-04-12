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
  const result = [];
  let tmp = [];
  let current = '';
  let previous = '';
  const obj = {};

  tmp = domains.map((el) => el.split('.'));

  for (let i = 0; i < tmp.length; i++) {
    for (let j = tmp[i].length - 1; j >= 0; j--) {
      current = `${previous}.${tmp[i][j]}`;
      result.push(current);
      previous = current;
    }
    current = '';
    previous = '';
  }

  for (let i = 0; i < result.length; i++) {
    if (obj[result[i]]) {
      obj[result[i]]++;
    } else {
      obj[result[i]] = 1;
    }
  }

  return obj;
}

module.exports = getDNSStats;
