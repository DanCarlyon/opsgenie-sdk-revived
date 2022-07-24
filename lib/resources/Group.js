const operations = require('../operations');
const api = require('../api');

function group() {
  const baseURL = '/v1/json/group/';
  const defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

  let ops = {
    baseURL,
    /**
     * Add member group request is used to add new users to group in OpsGenie
     * "users" : "eric.boston@opsgenie.com" or "users" : ["eric.boston@opsgenie.com", "john.smith@opsgenie.com"]
     */
    addMember(data, config, cb) {
      api.post(`${this.baseURL}member`, data, config, cb);
    },
    /**
     * Remove member group request is used to remove users to group in OpsGenie
     * "users" : "eric.boston@opsgenie.com" or "users" : ["eric.boston@opsgenie.com", "john.smith@opsgenie.com"]
     */
    removeMember(data, config, cb) {
      api.delete(`${this.baseURL}member`, data, config, cb);
    },
  };
  ops = operations.attach(ops, defaultOperations);
  return ops;
}

module.exports = group;
