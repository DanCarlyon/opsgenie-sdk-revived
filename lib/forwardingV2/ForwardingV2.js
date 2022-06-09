"use strict";

const api = require('./../restApi');

/**
 * https://docs.opsgenie.com/docs/forwarding-rule-api
 *
 * @returns {{get: get, create: create, list: list, delete: delete, updateRule: updateRule}}
 */
function forwardingV2() {
    let baseURL = '/v2/forwarding-rules/';

    return {
        /**
         * https://docs.opsgenie.com/docs/forwarding-rule-api
         * Also, you can check /samples/forwardingV2/create.js for a complete example.
         *
         * @param data
         * @param config
         * @param cb
         */
        create: function (data, config, cb) {
            api.post(baseURL, data, config, cb)
        },

        /**
         * Get forwarding rule by identifier
         * https://docs.opsgenie.com/docs/forwarding-rule-api#section--get-forwarding-rule-
         * One of id, tinyId or alias parameters should be specified with get alert request as identifier.
         * Alias option can only be used for open alerts
         * example identifier objects:
         * {identifier : "123", identifierType : "tiny"}
         * {identifier : "123-23-123", identifierType : "id"}
         * {identifier : "alertAlias", identifierType : "alias"}
         *
         * @param identifier
         * @param config
         * @param cb
         */
        get: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.get(path, config, cb)
        },

        /**
         * Delete a forwarding rule
         * https://docs.opsgenie.com/docs/forwarding-rule-api#section--delete-forwarding-rule-
         *
         * @param identifier
         * @param config
         * @param cb
         */
        delete: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.delete(path, config, cb)
        },

        /**
         * https://docs.opsgenie.com/docs/forwarding-rule-api#section--list-forwarding-rules-
         *
         * @param params
         * @param config
         * @param cb
         */
        list: function (params, config, cb) {
            let path = api.getPathWithListParams(baseURL, params);
            api.get(path, config, cb)
        },

        /**
         * https://docs.opsgenie.com/docs/forwarding-rule-api#section--delete-forwarding-rule-
         *
         * @param identifier
         * @param data
         * @param config
         * @param cb
         */
        updateRule: function (identifier, data, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.put(path, data, config, cb);
        },
    };
}

module.exports = forwardingV2;
