const opsgenie = require('../..');
require('../configure');

const create_schedule_override_json = {
  alias: 'OverrideAlias',
  user: {
    type: 'user',
    username: 'dan.carlyon@space48.com',
  },
  startDate: '2022-06-14T09:00Z',
  endDate: '2022-06-14T15:00Z',
  rotations: [
    {
      id: '04a7e991-8db1-4404-9811-53b45465df9c',
    },
  ],
};

opsgenie.scheduleOverrideV2.create(
  'ee263bad-e4e2-4119-a7d0-0322b84a7680',
  create_schedule_override_json,
  (error, overrideData) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Create Schedule Override Response');
      console.log(overrideData);
    }
  }
);
