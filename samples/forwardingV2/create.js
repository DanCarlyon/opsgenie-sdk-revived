"use strict";

let opsgenie = require('../../');
require('../configure');

let todaysDate = new Date();
todaysDate.setDate(todaysDate.getDate() + 1);
let startDate = todaysDate.toISOString();
todaysDate.setDate(todaysDate.getDate() + 5);
let endDate = todaysDate.toISOString();

let create_rule_json = {
    fromUser: {
        id: 'c1754eea-7f80-4126-8a64-a55c42439947'
    },
    toUser: {
        id: '830e4738-fc50-4bd0-b789-00fc0db76418'
    },
    startDate: startDate,
    endDate: endDate
};

opsgenie.forwardingV2.create(create_rule_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Forwarding Rule Response:");
        console.log(alert);
    }
});
