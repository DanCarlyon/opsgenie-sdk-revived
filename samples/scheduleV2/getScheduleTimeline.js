const opsgenie = require('../..');
require('../configure');

const options = {
  interval: 1,
  intervalUnit: 'months',
};

opsgenie.scheduleV2.getScheduleTimeline('cb0ddf84-2b2c-40b9-8ff3-396e5060409e', options, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});
