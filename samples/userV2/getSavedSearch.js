const opsgenie = require('../..');
require('../configure');

const get_saved_search_identifier = {
  identifier: 'open_and_acked', // should be custom to your created saved search
  identifierType: 'name',
};

opsgenie.userV2.getSavedSearches(get_saved_search_identifier, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Get Saved Search Response');
    console.log(result);
  }
});
