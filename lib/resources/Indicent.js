const operations = require('../operations');
const api = require('../api');

function incident() {
  const baseURL = '/v1/incidents/';
  const defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

  let ops = {
    baseURL,

    /**
     * @param data
     * @param config
     * @param cb
     */
    getAssociatedAlerts(data, config, cb) {
      api.get(`${this.baseURL}associated-alert-ids`, data, config, cb);
    },
  };
  ops = operations.attach(ops, defaultOperations);
  return ops;
}

module.exports = incident;
