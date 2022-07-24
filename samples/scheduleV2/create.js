const opsgenie = require('../..');
require('../configure');

const create_schedule_json = {
  name: 'A Schedule',
  ownerTeam: { id: '3d2f8f85-8fca-41a4-871e-139f81138334' },
};

opsgenie.scheduleV2.create(create_schedule_json, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Create Schedule Response');
    console.log(user);
  }
});
