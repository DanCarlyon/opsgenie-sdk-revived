const operations = require('../operations');

/**
 * @deprecated API no longer available
 * @return {Object} order functions
 */
function user() {
  const baseURL = '/v1/json/user/';
  const defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

  let ops = {
    baseURL,

    // copyNotificationRules is missing
  };
  ops = operations.attach(ops, defaultOperations);
  return ops;
}

module.exports = user;
