require('../configure');
const opsgenie = require('../..');

opsgenie.configure({
  host: 'https://api.opsgenie.com',
  api_key: 'yourApiKey',
});

const requestId = 'yourRequestId';

opsgenie.alertV2.getRequestStatus(requestId, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Request Status :');
    console.log(JSON.parse(result).data);
  }
});
