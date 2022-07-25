const operations = require('../operations');
const api = require('../api');

/**
 * @deprecated API no longer available
 * @return {Object} order functions
 */
function alert() {
  const baseURL = '/v1/json/alert/';
  const defaultOperations = ['get', 'list', 'create', 'delete', 'deleteById'];

  let ops = {
    baseURL,

    /**
     * One of id or alias parameters should be specified with close alert request.
     * Alias option can only be used for open alerts
     * example data: {id: 'id1'} or {alias: 'alias1'} etc.
     *
     * @deprecated
     */
    close(data, config, cb) {
      api.post(`${this.baseURL}close`, data, config, cb);
    },
    /**
     * Count alerts request is used to counts alerts in OpsGenie
     *
     * @deprecated
     */
    count(data, config, cb) {
      api.get(`${this.baseURL}count`, data, config, cb);
    },
    /**
     * data should be either {id: 'id1'} or {alias: 'alias1'}
     *
     * @deprecated
     */
    listAlertNotes(data, config, cb) {
      api.get(`${this.baseURL}note`, data, config, cb);
    },
    /**
     * data should be either {id: 'id1'} or {alias: 'alias1'}
     *
     * @deprecated
     */
    listAlertLogs(data, config, cb) {
      api.get(`${this.baseURL}log`, data, config, cb);
    },
    /**
     * data should be either {id: 'id1'} or {alias: 'alias1'}
     *
     * @deprecated
     */
    listAlertRecipients(data, config, cb) {
      api.get(`${this.baseURL}recipient`, data, config, cb);
    },
    /**
     * data should be either {id: 'id1'} or {alias: 'alias1'}
     *
     * @deprecated
     */
    acknowledge(data, config, cb) {
      api.post(`${this.baseURL}acknowledge`, data, config, cb);
    },
    /**
     * One of id or alias parameters should be specified with snooze alert request. Alias option can only be used for open alerts
     * Also, endDate param should be provided - "endDate": ""2016-01-28 08:00""
     *
     * @deprecated
     */
    snooze(data, config, cb) {
      api.post(`${this.baseURL}snooze`, data, config, cb);
    },
    /**
     * data should be either {id: 'id1'} or {alias: 'alias1'}
     *
     * @deprecated
     */
    renotify(data, config, cb) {
      api.post(`${this.baseURL}renotify`, data, config, cb);
    },
    /**
     * data should be either {id: 'id1'} or {alias: 'alias1'}
     *
     * @deprecated
     */
    takeOwnership(data, config, cb) {
      api.post(`${this.baseURL}takeOwnership`, data, config, cb);
    },
    /**
     * One of id or alias parameters should be specified with assign request. Alias option can only be used for open alerts
     * Also, owner param should be provided "owner":"john.smith@ifountain.com"
     *
     * @deprecated
     */
    assign(data, config, cb) {
      api.post(`${this.baseURL}assign`, data, config, cb);
    },
    /**
     * Add team request is used to add new teams to alerts in OpsGenie. It takes the following parameters
     * One of id or alias parameters should be specified with add team request. Alias option can only be used for open alerts
     * Also, the new team that will be added should be added to parameters as "team": "operations"
     *
     * @deprecated
     */
    addTeam(data, config, cb) {
      api.post(`${this.baseURL}team`, data, config, cb);
    },
    /**
     * Add recipient request is used to add new recipients(user or group) to alerts in OpsGenie
     * One of id or alias parameters should be specified with add recipient request. Alias option can only be used for open alerts
     * Also, the new recipient that will be added as "recipient":"john.smith@ifountain.com"
     *
     * @deprecated
     */
    addRecipient(data, config, cb) {
      api.post(`${this.baseURL}recipient`, data, config, cb);
    },
    /**
     * Add note request is used to add notes to alerts in OpsGenie
     * One of id or alias parameters should be specified with add note request. Alias option can only be used for open alerts
     * Also, note param is mandatory as "note": "custom note"
     *
     * @deprecated
     */
    addNote(data, config, cb) {
      api.post(`${this.baseURL}note`, data, config, cb);
    },
    /**
     * Add tags request is used to add tags to alerts in OpsGenie
     * One of id or alias parameters should be specified with add tags request. Alias option can only be used for open alerts
     * Also, tags param is mandatory as "tags": "emergency, delay"
     *
     * @deprecated
     */
    addTags(data, config, cb) {
      api.post(`${this.baseURL}tags`, data, config, cb);
    },
    /**
     * Remove tags request is used to remove tags from alerts in OpsGenie
     * One of id or alias parameters should be specified with add tags request. Alias option can only be used for open alerts
     * Also, tags param is mandatory as "tags": "emergency, delay"
     *
     * @deprecated
     */
    removeTags(data, config, cb) {
      if (data.tags === undefined) {
        return new Error('tags param can not be empty.');
      }
      api.delete(`${this.baseURL}tags`, data, config, cb);
    },
    /**
     * Add details request is used to add details to alerts in OpsGenie
     * One of id or alias parameters should be specified with add details request. Alias option can only be used for open alerts
     * Also, details param is mandatory as "details": {"prop1" : "val1", "prop2" : "val2"}
     *
     * @deprecated
     */
    addDetails(data, config, cb) {
      api.post(`${this.baseURL}details`, data, config, cb);
    },
    /**
     * Remove details request is used to remove details from alerts in OpsGenie
     * One of id or alias parameters should be specified with add details request. Alias option can only be used for open alerts
     * Also, details param is mandatory as "keys" : { "prop1", "prop2" }
     *
     * @deprecated
     */
    removeDetails(data, config, cb) {
      if (data.keys === undefined) {
        return new Error('details param can not be empty.');
      }
      api.delete(`${this.baseURL}details`, data, config, cb);
    },
    /**
     * Execute action request is used to execute predefined actions on alerts in OpsGenie
     * One of id or alias parameters should be specified with execute action request. Alias option can only be used for open alerts
     * Also, action param is mandatory as "action": "acknowledge"
     *
     * @deprecated
     */
    executeAction(data, config, cb) {
      api.post(`${this.baseURL}executeAction`, data, config, cb);
    },
  };
  ops = operations.attach(ops, defaultOperations);
  return ops;
}

module.exports = alert;
