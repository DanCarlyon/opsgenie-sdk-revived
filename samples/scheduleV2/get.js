"use strict";

let opsgenie = require('../../');
require('../configure');

let get_schedule_json = {
    identifier: "cb0ddf84-2b2c-40b9-8ff3-396e5060409e"
};

opsgenie.scheduleV2.get(get_schedule_json, function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log(user);
    }
});
