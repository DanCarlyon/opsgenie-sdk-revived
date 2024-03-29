require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const addNote_alert_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const addNote_alert_data = {
  note: 'some note to add',
  user: 'user@opsgenie.com',
  source: 'source of the request',
};

opsgenie.alertV2.addNote(addNote_alert_identifier, addNote_alert_data, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Add Note Response');
    console.log(result);
  }
});
