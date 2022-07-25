const api = require('../restApi');

/**
 *
 * @returns {{create: create}}
 */
function scheduleOverrideV2() {
  const baseURL = '/v2/schedules/';

  return {
    /**
     * https://docs.opsgenie.com/docs/schedule-override-api#create-schedule-override
     *
     * @param {string} identifier
     * @param {object} data
     * @param config
     * @param cb
     */
    create(identifier, data, config, cb) {
      api.post(`${baseURL}/${identifier}/overrides`, data, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-override-api#get-schedule-override
     *
     * @param {string} identifier
     * @param {string} alias
     * @param config
     * @param cb
     */
    get(identifier, alias, config, cb) {
      const path = api.getPath(baseURL, { identifier }, `overrides/${alias}`);
      api.get(path, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-override-api#update-schedule-override
     *
     * @param {string} alias
     * @param {string} identifier
     * @param {object} data
     * @param config
     * @param cb
     */
    update(alias, identifier, data, config, cb) {
      const path = api.getPath(baseURL, identifier, `overrides/${alias}`);
      api.put(path, data, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-override-api#delete-schedule-override
     *
     * @param {string} identifier
     * @param {string} alias
     * @param config
     * @param cb
     */
    delete(identifier, alias, config, cb) {
      const path = api.getPath(baseURL, { identifier }, `overrides/${alias}`);
      api.delete(path, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-override-api#list-schedule-overrides
     *
     * @param {string} identifier
     * @param config
     * @param cb
     */
    list(identifier, config, cb) {
      const path = api.getPath(baseURL, { identifier }, '/overrides');
      api.get(path, config, cb);
    },
  };
}

module.exports = scheduleOverrideV2;
