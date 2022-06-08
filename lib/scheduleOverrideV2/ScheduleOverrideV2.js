"use strict";

const api = require('./../restApi');

/**
 *
 * @returns {{create: create}}
 */
function scheduleOverrideV2()
{
    let baseURL = '/v2/schedules/';

    return {
        /**
         * https://docs.opsgenie.com/docs/schedule-override-api#create-schedule-override
         *
         * @param identifier
         * @param data
         * @param config
         * @param cb
         */
        create: function(identifier, data, config, cb) {
            api.post(`${baseURL}/${identifier}/overrides`, data, config, cb)
        },

        /**
         * https://docs.opsgenie.com/docs/schedule-override-api#list-schedule-overrides
         *
         * @param identifier
         * @param config
         * @param cb
         */
        list: function(identifier, config, cb) {
            let path = api.getPath(baseURL, {identifier: identifier}, '/overrides');
            api.get(path, config, cb)
        }

    }
}

module.exports = scheduleOverrideV2;