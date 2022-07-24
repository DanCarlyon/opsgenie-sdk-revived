const opsgenie = require('../..');
require('../configure');

const update_schedule_json = {
  name: 'New Name',
};

opsgenie.scheduleV2.updateSchedule('cb0ddf84-2b2c-40b9-8ff3-396e5060409e', update_schedule_json, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Update Schedule Response');
    console.log(user);
  }
});
