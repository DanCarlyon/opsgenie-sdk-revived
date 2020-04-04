"use strict";

const opsgenie = require('../../');
require('../configure');

opsgenie.userV2.listSavedSearches(function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Saved Searches Response");
        console.log(result);
    }
});
