"use strict";

const opsgenie = require('../../');
require('../configure');

let list_params = {};

opsgenie.escalationV2.list(list_params, function (error, alerts) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Escalations Response");
        console.log(alerts);
    }
});
