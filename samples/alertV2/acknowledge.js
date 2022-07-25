require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const acknowledge_alert_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const acknowledge_alert_data = {
  note: 'some note for acknowledge action',
  user: 'user@opsgenie.com',
  source: 'source of the acknowledge request',
};

opsgenie.alertV2.acknowledge(acknowledge_alert_identifier, acknowledge_alert_data, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Acknowledge Alert Response');
    console.log(result);
  }
});
