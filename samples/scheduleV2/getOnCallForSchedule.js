const opsgenie = require('../..');
require('../configure');

opsgenie.scheduleV2.getOnCallForSchedule('cb0ddf84-2b2c-40b9-8ff3-396e5060409e', (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});
