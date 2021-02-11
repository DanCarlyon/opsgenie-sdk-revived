"use strict";

let opsgenie = require('../../');
require('../configure');

let delete_rule_identifier = {
    identifier: "7b55b16e-3de7-44b1-8c04-31e5966a7a31",
    identifierType : "id"
};

opsgenie.forwardingV2.delete(delete_rule_identifier, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Delete Forwarding Rule Response:");
        console.log(result);
    }
});
