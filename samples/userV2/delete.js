const opsgenie = require('../..');
require('../configure');

const delete_user_json = {
  identifier: '4f594840-6c25-4cfa-b0b5-b2450bff7f50',
};

opsgenie.userV2.delete(delete_user_json, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Delete User Response');
    console.log(user);
  }
});
