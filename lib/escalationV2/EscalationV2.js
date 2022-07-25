const api = require('../restApi');

/**
 * API information - https://docs.opsgenie.com/docs/escalation-api
 * @returns {{updateEscalation: updateEscalation, get: get, create: create, deleteEscalation: deleteEscalation}}
 */
function escalationV2() {
  const baseURL = '/v2/escalations';

  return {
    /**
     * @param data
     * @param config
     * @param cb
     */
    create(data, config, cb) {
      api.post(baseURL, data, config, cb);
    },

    /**
     * @param identifier
     * @param config
     * @param cb
     */
    get(identifier, config, cb) {
      const path = api.getPath(baseURL, identifier, null);
      api.get(path, config, cb);
    },

    /**
     * @param params
     * @param config
     * @param cb
     */
    list(params, config, cb) {
      const path = api.getPathWithListParams(baseURL, params);
      api.get(path, config, cb);
    },

    /**
     * @param identifier
     * @param data
     * @param config
     * @param cb
     */
    updateEscalation(identifier, data, config, cb) {
      const path = api.getPath(baseURL, identifier, null);
      api.patch(path, data, config, cb);
    },

    /**
     * @param identifier
     * @param data
     * @param config
     * @param cb
     */
    deleteEscalation(identifier, data, config, cb) {
      const path = api.getPath(baseURL, identifier, null);
      api.delete(path, data, config, cb);
    },
  };
}

module.exports = escalationV2;
