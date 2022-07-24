const opsgenie = require('../..');
require('../configure');

const get_escaltion_identifier = {
  identifier: '43ac25c1-e36b-4449-9008-333a2da999f0',
  identifierType: 'id',
};

opsgenie.escalationV2.get(get_escaltion_identifier, (error, escalation) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Get Alert Response for id:${JSON.parse(escalation).data.id}`);
  }
});
