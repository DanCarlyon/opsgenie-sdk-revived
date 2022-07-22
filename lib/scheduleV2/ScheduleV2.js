"use strict";

const api = require('./../restApi');

/**
 *
 * @returns {{getScheduleTimeline: getScheduleTimeline, updateSchedule: updateSchedule, get: get, create: create, list: list, delete: delete}}
 */
function scheduleV2()
{
    let baseURL = '/v2/schedules/';
    let timeline = '/timeline/';

    return {
      /**
       * https://docs.opsgenie.com/docs/schedule-api#section-get-schedule
       * @param identifier
       * @param config
       * @param cb
       */
      get: function (identifier, config, cb) {
        let path = api.getPath(baseURL, identifier, null);
        api.get(path, config, cb);
      },

      /**
       * https://docs.opsgenie.com/docs/schedule-api#section-list-schedules
       * @param params
       * @param config
       * @param cb
       */
      list: function (params, config, cb) {
        let path = api.getPathWithListParams(baseURL, params);
        api.get(path, config, cb);
      },

      /**
       * https://docs.opsgenie.com/docs/schedule-api#section-create-schedule
       * @param data
       * @param config
       * @param cb
       */
      create: function (data, config, cb) {
        api.post(baseURL, data, config, cb);
      },

      /**
       * https://docs.opsgenie.com/docs/schedule-api#section-delete-schedule
       * @param identifier
       * @param config
       * @param cb
       */
      delete: function (identifier, config, cb) {
        let path = api.getPath(baseURL, identifier, null);
        api.delete(path, config, cb);
      },

      /**
       * https://docs.opsgenie.com/docs/schedule-api#section-update-schedule-partial
       * @param identifier
       * @param data
       * @param config
       * @param cb
       */
      updateSchedule: function (identifier, data, config, cb) {
        let path = api.getPath(baseURL, identifier, null);
        api.patch(path, data, config, cb);
      },

      /**
       * https://docs.opsgenie.com/docs/schedule-api#section-get-schedule-timeline
       * @param identifier
       * @param config
       * @param cb
       */
      getScheduleTimeline: function (identifier, config, cb) {
        let path = api.getPath(baseURL, identifier, timeline);
        let finalPath = api.getPathWithListParams(path, config);
        api.get(finalPath, config, cb);
      },

      /**
       * https://docs.opsgenie.com/docs/who-is-on-call-api
       * @param identifier
       * @param cb
       */
      getOnCallForSchedule: function (identifier, cb) {
        let path = api.getPath(baseURL, identifier, 'on-calls');
        let finalPath = api.getPathWithListParams(path);
        api.get(finalPath, cb);
      },
    };
}

module.exports = scheduleV2;
