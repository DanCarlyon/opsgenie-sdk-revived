"use strict";

let opsgenie = require('../../');
require('../configure');

opsgenie.scheduleV2.delete("cb0ddf84-2b2c-40b9-8ff3-396e5060409e", function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("Delete Schedule Response");
        console.log(user);
    }
});
