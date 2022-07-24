const opsgenie = require('../..');
require('../configure');

const get_user_json = {
  identifier: 'eb387227-4d7c-4ceb-b970-c4ba728af5d0',
};

opsgenie.userV2.listUserForwardingRules(get_user_json, (error, users) => {
  if (error) {
    console.error(error);
  } else {
    console.log(users);
  }
});
