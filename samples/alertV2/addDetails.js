require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const addDetails_request_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const addDetails_data = {
  note: 'some note for add details action',
  user: 'user@opsgenie.com',
  source: 'source of the add details request',
  details: {
    key1: 'value1',
    key2: 'value2',
  },
};

opsgenie.alertV2.addDetails(addDetails_request_identifier, addDetails_data, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Add Details to Alert Response');
    console.log(result);
  }
});
