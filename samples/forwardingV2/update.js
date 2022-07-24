const opsgenie = require('../..');
require('../configure');

const todaysDate = new Date();
todaysDate.setDate(todaysDate.getDate() + 1);
const startDate = todaysDate.toISOString();
todaysDate.setDate(todaysDate.getDate() + 14);
const endDate = todaysDate.toISOString();

const update_rule_json = {
  fromUser: {
    id: 'c1754eea-7f80-4126-8a64-a55c42439947',
  },
  toUser: {
    id: '830e4738-fc50-4bd0-b789-00fc0db76418',
  },
  startDate,
  endDate,
};

opsgenie.forwardingV2.updateRule('ebb3c4e0-b9b9-4b6d-89d8-6b10032719db', update_rule_json, (error, rule) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Update Rule Response');
    console.log(rule);
  }
});
