/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = [];
  let domain;
  const arr = email.split('');

  arr.forEach((item, i) => {
    if (item === '@') {
      domain = i;
    }
  });

  for (let i = domain + 1; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result.join('');
}

module.exports = getEmailDomain;
