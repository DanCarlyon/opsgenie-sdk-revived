"use strict";

const api = require('./../restApi');

/**
 * API information - https://docs.opsgenie.com/docs/escalation-api
 * @returns {{updateEscalation: updateEscalation, get: get, create: create, deleteEscalation: deleteEscalation}}
 */
function escalationV2() {
    let baseURL = '/v2/escalations';

    return {
        /**
         * @param data
         * @param config
         * @param cb
         */
        create: function(data, config, cb) {
            api.post(baseURL, data, config, cb);
        },

        /**
         * @param identifier
         * @param config
         * @param cb
         */
        get: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.get(path, config, cb)
        },

        /**
         * @param params
         * @param config
         * @param cb
         */
        list: function (params, config, cb) {
            let path = api.getPathWithListParams(baseURL, params);
            api.get(path, config, cb)
        },

        /**
         * @param identifier
         * @param data
         * @param config
         * @param cb
         */
        updateEscalation: function (identifier, data, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.patch(path, data, config, cb)
        },

        /**
         * @param identifier
         * @param data
         * @param config
         * @param cb
         */
        deleteEscalation: function (identifier, data, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.delete(path, data, config, cb)
        },
    };
}

module.exports = escalationV2;
