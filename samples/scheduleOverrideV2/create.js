"use strict";

let opsgenie = require('../../');
require('../configure');

let create_schedule_override_json = {
    "alias" : "Override Alias",
    "user" : {
        "type" : "user",
        "username": "user@email.com"
    },
    "startDate" : "2032-06-14T09:00Z",
    "endDate" : "2032-06-14T15:00Z",
    "rotations" : [
        {
            "id": "04a7e991-8db1-4404-9811-000000000000"
        }
    ]
};

opsgenie.scheduleOverrideV2.create('ee263bad-e4e2-4119-a7d0-000000000000', create_schedule_override_json, function (error, overrideData) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Schedule Override Response");
        console.log(overrideData);
    }
});
