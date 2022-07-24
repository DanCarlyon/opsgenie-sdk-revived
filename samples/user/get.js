const opsgenie = require('../..');
require('../configure');

const get_user_json = {
  id: 'f3fcc0d4-8dc8-4247-8e64-df603e949bb2',
};

opsgenie.user.get(get_user_json, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Get User Response');
    console.log(user);
  }
});
