const opsgenie = require('../..');
require('../configure');

opsgenie.userV2.listSavedSearches((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('List Saved Searches Response');
    console.log(result);
  }
});
