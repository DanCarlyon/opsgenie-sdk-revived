/* eslint-disable max-len */
const api = require('../restApi');

/**
 *
 * @returns {{getScheduleTimeline: getScheduleTimeline, updateSchedule: updateSchedule, get: get, create: create, list: list, delete: delete}}
 */
function scheduleV2() {
  const baseURL = '/v2/schedules/';
  const timeline = '/timeline/';

  return {
    /**
     * https://docs.opsgenie.com/docs/schedule-api#section-get-schedule
     * @param identifier
     * @param config
     * @param cb
     */
    get(identifier, config, cb) {
      const path = api.getPath(baseURL, identifier, null);
      api.get(path, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-api#section-list-schedules
     * @param params
     * @param config
     * @param cb
     */
    list(params, config, cb) {
      const path = api.getPathWithListParams(baseURL, params);
      api.get(path, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-api#section-create-schedule
     * @param data
     * @param config
     * @param cb
     */
    create(data, config, cb) {
      api.post(baseURL, data, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-api#section-delete-schedule
     * @param identifier
     * @param config
     * @param cb
     */
    delete(identifier, config, cb) {
      const path = api.getPath(baseURL, identifier, null);
      api.delete(path, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-api#section-update-schedule-partial
     * @param identifier
     * @param data
     * @param config
     * @param cb
     */
    updateSchedule(identifier, data, config, cb) {
      const path = api.getPath(baseURL, identifier, null);
      api.patch(path, data, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/schedule-api#section-get-schedule-timeline
     * @param identifier
     * @param config
     * @param cb
     */
    getScheduleTimeline(identifier, config, cb) {
      const path = api.getPath(baseURL, identifier, timeline);
      const finalPath = api.getPathWithListParams(path, config);
      api.get(finalPath, config, cb);
    },

    /**
     * https://docs.opsgenie.com/docs/who-is-on-call-api
     * @param identifier
     * @param cb
     */
    getOnCallForSchedule(identifier, cb) {
      const path = api.getPath(baseURL, identifier, 'on-calls');
      const finalPath = api.getPathWithListParams(path);
      api.get(finalPath, cb);
    },
  };
}

module.exports = scheduleV2;
