"use strict";

const opsgenie = require('../../');
require('../configure');

let get_user_json = {
    identifier: "eb387227-4d7c-4ceb-b970-c4ba728af5d0"
};

opsgenie.userV2.listUserSchedules(get_user_json, function (error, users) {
    if (error) {
        console.error(error);
    } else {
        console.log(users);
    }
});
