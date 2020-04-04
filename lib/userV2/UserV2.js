"use strict";

const api = require('./../restApi');

/**
 * User API v2. For more information: https://www.opsgenie.com/docs/rest-api/user-api
 * To see mandatory and optional parameter checkout the alert api web page
 *
 * Also, you can check samples under /samples/userV2 for examples.
 *
 * @return {Object} order functions
 */

function userV2() {
    let baseURL = '/v2/users/';
    let escalations = '/escalations/';
    let teams = '/teams/';
    let forwarding = '/forwarding-rules/';
    let schedules = '/schedules/';
    let savedSearches = baseURL + 'saved-searches/';

    return {
        /**
         * Get a specific user from opsgenie based on id or email address
         * https://docs.opsgenie.com/docs/user-api#section-get-user
         * @param identifier
         * @param config
         * @param cb
         */
        get: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, null);
            api.get(path, config, cb);
        },

        /**
         * Get list of users, defaults to all users
         * https://docs.opsgenie.com/docs/user-api#section-list-user
         * @param params
         * @param config
         * @param cb
         */
        list: function (params, config, cb) {
            let path = api.getPathWithListParams(baseURL, params);
            api.get(path, config, cb)
        },

        /**
         * This request is to create Users in Opsgenie.
         * https://www.opsgenie.com/docs/rest-api/user-api#section-create-user
         *
         * @param data
         * @param config
         * @param cb
         */
        create: function (data, config, cb) {
            api.post(baseURL, data, config, cb)
        },

        /**
         * This request is to delete a User in Opsgenie.
         * identifier parameter should be specified
         * https://docs.opsgenie.com/docs/user-api#section-delete-user
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
         * List user escalation requests
         * https://docs.opsgenie.com/docs/user-api#section-list-user-escalations
         *
         * @param identifier
         * @param config
         * @param cb
         */
        listUserEscalations: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, escalations);
            api.get(path, config, cb)
        },

        /**
         * List User Teams
         * https://docs.opsgenie.com/docs/user-api#section-list-user-teams
         *
         * @param identifier
         * @param config
         * @param cb
         */
        listUserTeams: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, teams);
            api.get(path, config, cb);
        },

        /**
         * List User Forwarding Rules
         * https://docs.opsgenie.com/docs/user-api#section-list-user-forwarding-rules
         *
         * @param identifier
         * @param config
         * @param cb
         */
        listUserForwardingRules: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, forwarding);
            api.get(path, config, cb);
        },

        /**
         * List User Schedules
         * https://docs.opsgenie.com/docs/user-api#section-list-user-schedules
         *
         * @param identifier
         * @param config
         * @param cb
         */
        listUserSchedules: function (identifier, config, cb) {
            let path = api.getPath(baseURL, identifier, schedules);
            api.get(path, config, cb);
        },

        /**
         * Get Saved Search
         * https://docs.opsgenie.com/docs/user-api#section-get-saved-search
         *
         * @param identifier
         * @param config
         * @param cb
         */
        getSavedSearches: function (identifier, config, cb) {
            let path = api.getPath(savedSearches, identifier, null);
            api.get(path, config, cb);
        },

        /**
         * List Saved Searches
         * https://docs.opsgenie.com/docs/user-api#section-list-saved-searches
         *
         * @param config
         * @param cb
         */
        listSavedSearches: function (config, cb) {
            api.get(savedSearches, config, cb)
        }
    };
}

module.exports = userV2;
