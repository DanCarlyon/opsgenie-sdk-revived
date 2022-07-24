const opsgenie = require('../..');
require('../configure');

const list_params = {};

opsgenie.escalationV2.list(list_params, (error, alerts) => {
  if (error) {
    console.error(error);
  } else {
    console.log('List Escalations Response');
    console.log(alerts);
  }
});
