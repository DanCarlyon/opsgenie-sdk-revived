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
         * https://docs.opsgenie.com/docs/schedule-override-api#get-schedule-override
         *
         * @param identifier
         * @param alias
         * @param config
         * @param cb
         */
        get: function(identifier, alias, config, cb) {
            let path = api.getPath(baseURL, {identifier: identifier}, `overrides/${alias}`);
            api.get(path, config, cb);
        },

        /**
         * https://docs.opsgenie.com/docs/schedule-override-api#update-schedule-override
         *
         * @param alias
         * @param params
         * @param config
         * @param cb
         * @TODO Test and fix this and create sample
         */
        update: function(alias, params, config, cb) {
            let path = api.getPath(baseURL, {identifier: params['identifier']}, `overrides/${alias}`);
            api.patch(path, data, config, cb)
        },

        /**
         * https://docs.opsgenie.com/docs/schedule-override-api#delete-schedule-override
         *
         * @param identifier
         * @param alias
         * @param config
         * @param cb
         * @TODO Test and fix this and create sample
         */
        delete: function (identifier, alias, config, cb) {
            let path = api.getPath(baseURL, {identifier: identifier}, `overrides/${alias}`);
            api.delete(path, config, cb)
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