const opsgenie = require('../..');
require('../configure');

const create_escalation_json = {
  name: 'This is a test escalationV2',
  rules: [
    {
      condition: 'if-not-closed',
      notifyType: 'default',
      delay: {
        timeAmount: 0,
        timeUnit: 'minutes',
      },
      recipient: {
        type: 'user',
        id: 'c1754eea-7f80-4126-8a64-a55c42439947',
        username: 'danpcarlyon@gmail.com',
      },
    },
  ],
};

opsgenie.escalationV2.create(create_escalation_json, (error, alert) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Create Escalation Response:');
    console.log(alert);
  }
});
