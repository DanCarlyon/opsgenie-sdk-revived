"use strict";

const opsgenie = require('../../');
require('../configure');

let delete_escalation_identifier = {
    identifier: "0f91e341-db66-4e8f-a49c-359f1cc0cf9b",
    identifierType : "id"
};

opsgenie.escalationV2.delete(delete_escalation_identifier, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Delete Alert Response:");
        console.log(result);
    }
});
