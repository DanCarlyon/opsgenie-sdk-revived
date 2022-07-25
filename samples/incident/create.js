const opsgenie = require('../..');
require('../configure');

const create_alert_json = {
  message: 'Some Message',
  serviceId: 'Server_ID',
};

opsgenie.incident.create(create_alert_json, (error, alert) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Create Alert Response');
    console.log(alert);
  }
});
