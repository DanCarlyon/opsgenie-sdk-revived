"use strict";

let opsgenie = require('../../');
require('../configure');

opsgenie.scheduleOverrideV2.delete('ee263bad-e4e2-4119-a7d0-0322b84a7680', 'OverrideAlias', function (error, overrideData) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Schedule Override Response");
        console.log(overrideData.data);
    }
});
