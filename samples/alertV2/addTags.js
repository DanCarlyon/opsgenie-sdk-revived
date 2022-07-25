require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const addTags_request_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const addTags_data = {
  note: 'some note for add tags action',
  user: 'user@opsgenie.com',
  source: 'source of the add tags request',
  tags: ['tag1', 'tag2'],
};

opsgenie.alertV2.addTags(addTags_request_identifier, addTags_data, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Add Tags to Alert Response');
    console.log(result);
  }
});
