/* eslint-disable no-unused-vars */
const request = require('requestretry');
const utils = require('./utils.js');

exports.sdkVersion = require('../package.json').version;

let def_options = {
  mode: 'live',
  host: 'https://api.opsgenie.com',
  maxAttempts: 5,
  retryDelay: 5000,
  retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
};

let def_http_options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

exports.default_options = def_options;

const configure = (exports.configure = function configure(options) {
  if (options !== undefined && typeof options === 'object') {
    def_options = utils.merge(def_options, options);
  }
});

exports.default_http_options = def_http_options;

const headers = (exports.headers = function (http_options) {
  if (http_options !== undefined && typeof http_options === 'object') {
    def_http_options = utils.merge(def_http_options, http_options);
  }
});
