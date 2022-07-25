const opsgenie = require('../..');
require('../configure');

const create_user_json = {
  username: 'serhat@example.com',
  fullname: 'Serhat Can',
  role: 'user',
};

opsgenie.user.create(create_user_json, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Create User Response');
    console.log(user);
  }
});
