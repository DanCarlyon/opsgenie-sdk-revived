const opsgenie = require('../..');
require('../configure');

const create_schedule_override_update_json = {
  alias: 'OverrideAlias',
  user: {
    type: 'user',
    username: 'user@email.com',
  },
  startDate: '2032-06-17T09:00Z',
  endDate: '2032-06-17T15:00Z',
  rotations: [
    {
      name: 'Rota Name',
    },
  ],
};

opsgenie.scheduleOverrideV2.update(
  'Override Alias',
  'eb387227-4d7c-4ceb-b970-000000000000',
  create_schedule_override_update_json,
  {},
  (error, overrideData) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Update Schedule Override Response');
      console.log(overrideData);
    }
  }
);
