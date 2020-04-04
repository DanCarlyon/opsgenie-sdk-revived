"use strict";

const operations = require('../operations');
const api = require('../api');

function incident() {
    let baseURL = '/v1/incidents/';
    let defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

    let ops = {
        baseURL: baseURL,

        /**
         * @param data
         * @param config
         * @param cb
         */
        getAssociatedAlerts: function (data, config, cb) {
            api.get(this.baseURL + 'associated-alert-ids', data, config, cb);
        },
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = incident;
