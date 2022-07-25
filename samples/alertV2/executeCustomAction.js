require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const custom_action_request_identifier = {
  identifier: '5', // should be custom to your created alert
  identifierType: 'tiny',
};

const custom_action_data = {
  note: 'some note for custom action request',
  user: 'user@opsgenie.com',
  source: 'source of the custom action request',
  action: 'newCustomAction',
};

opsgenie.alertV2.executeAction(custom_action_request_identifier, custom_action_data, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Custom Action Response');
    console.log(result);
  }
});
