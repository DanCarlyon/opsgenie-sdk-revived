const opsgenie = require('../..');
require('../configure');

const list_params = {
  order: 'desc',
};

opsgenie.forwardingV2.list(list_params, (error, rules) => {
  if (error) {
    console.error(error);
  } else {
    console.log('List Rules Response');
    console.log(rules);
  }
});
