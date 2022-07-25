const opsgenie = require('../..');
require('../configure');

opsgenie.scheduleV2.getOnCallForSchedule(
    {identifier: '00000000-0000-0000-0000-000000000000'},
    (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});
