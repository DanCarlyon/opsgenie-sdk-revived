"use strict";

const opsgenie = require('../../');
require('../configure');


let list_params = {};

opsgenie.userV2.list(list_params, function (error, users) {
    if (error) {
        console.error(error);
    } else {
        console.log(users);
    }
});
