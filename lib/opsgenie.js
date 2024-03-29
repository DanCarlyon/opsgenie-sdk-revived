const configuration = require('./configure');

module.exports = function () {
  function configure(options) {
    configuration.configure(options);
  }

  function headers(headers) {
    configuration.headers(headers);
  }

  return {
    version: configuration.sdkVersion,
    configure,
    headers,
    configuration: configuration.default_options,
    alertV2: require('./alertV2/AlertV2')(),
    alert: require('./resources/Alert')(),
    userV2: require('./userV2/UserV2')(),
    user: require('./resources/User')(),
    group: require('./resources/Group')(),
    team: require('./resources/Team')(),
    incident: require('./resources/Indicent')(),
    escalationV2: require('./escalationV2/EscalationV2')(),
    scheduleV2: require('./scheduleV2/ScheduleV2')(),
    forwardingV2: require('./forwardingV2/ForwardingV2')(),
    scheduleOverrideV2: require('./scheduleOverrideV2/ScheduleOverrideV2')(),
  };
};
