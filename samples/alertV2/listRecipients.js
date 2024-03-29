require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const list_recipients_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

opsgenie.alertV2.listAlertRecipients(list_recipients_identifier, (error, alert) => {
  if (error) {
    console.error(error);
  } else {
    console.log('List Alert Recipients Response');
    console.log(alert);
  }
});
