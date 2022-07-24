const opsgenie = require('../..');
require('../configure');

const delete_user_json = {
  id: 'f3fcc0d4-8dc8-4247-8e64-df603e949bb2',
};

opsgenie.user.delete(delete_user_json, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Delete User Response');
    console.log(user);
  }
});
