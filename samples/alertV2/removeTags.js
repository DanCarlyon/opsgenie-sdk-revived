require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const removeTags_request_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const removeTags_data = {
  note: 'some note for remove tags action',
  user: 'user@opsgenie.com',
  source: 'source of the remove tags request',
  tags: 'tag1, tag2',
};

opsgenie.alertV2.removeTags(removeTags_request_identifier, removeTags_data, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Remove Tags of Alert Response');
    console.log(result);
  }
});
