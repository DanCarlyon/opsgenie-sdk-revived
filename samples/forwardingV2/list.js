"use strict";

let opsgenie = require('../../');
require('../configure');

let list_params = {
    order : "desc"
};

opsgenie.forwardingV2.list(list_params, function (error, rules) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Rules Response");
        console.log(rules);
    }
});
