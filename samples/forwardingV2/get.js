"use strict";

let opsgenie = require('../../');
require('../configure');

let get_rule_identifier = {
    identifier: "ebb3c4e0-b9b9-4b6d-89d8-6b10032719db",
    identifierType : "id"
};

opsgenie.forwardingV2.get(get_rule_identifier, function (error, rule) {
    if (error) {
        console.error(error);
    } else {
        console.log("Get Rule Response for id: ");
        console.log(rule);
    }
});
