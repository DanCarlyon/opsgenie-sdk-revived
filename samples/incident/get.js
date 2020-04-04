"use strict";

var opsgenie = require('../../');
require('../configure');

opsgenie.incident.get({}, function (error, alert) {
    if (error) {
        console.log("Error status: " + error.httpStatusCode);
        console.error(error);
    } else {
        console.log(alert);
    }
});
