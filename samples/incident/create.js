"use strict";

const opsgenie = require('../../');
require('../configure');

let create_alert_json = {
    "message": "Some Message",
    "serviceId": "Server_ID"
};

opsgenie.incident.create(create_alert_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Alert Response");
        console.log(alert);
    }
});
