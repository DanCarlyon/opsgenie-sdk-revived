# OpsGenie Node.js SDK Revived

This repository is the revived version of the official OpsGenie Node.js SDK
I wanted to use this SDK but found, like others, that it was out of date and missing features and while i created pull request to the original they have not been merge so my last resort is to fork and extend what OpsGenie started.

And thus, OpsGenie-SDK-Revived is born!


## Aim and Scope

OpsGenie Node.js SDK aims to access OpsGenie Web API through HTTP calls from Node.js applications.

OpsGenie Node.js SDK covers:

* Alert API v2
* Alert API 
* User API
* Group API
* Team API
* Escalation API
* Schedule API
* Forwarding Rule API


* Schedule Override API (TODO: will be available soon)
* Heartbeat API (TODO: will be available soon)
* Integration API (TODO: will be available soon)
* Policy API (TODO: will be available soon)

Current differences from original package
* Added User API V2
* Added Incident API V1 (V2 not available yet)
* Added Escalation API V2
* Added Schedule API V2
* Added Forwarding API V2

## Installation
Node.js version >=0.6.x is required.

`npm install opsgenie-sdk-revived`

## Getting Started

```js
var opsgenie = require('opsgenie-sdk-revived');


// If using EU OpsGenie set host to EU API endpoint
// 'host': 'https://api.eu.opsgenie.com'
opsgenie.configure({
    'api_key': 'your_api_key'
});
```

```js
var get_alert_identifier = {
    identifier : "alert_id",
    identifierType : "id"
};

opsgenie.alertV2.get(get_alert_identifier, function (error, alert) {
    if (error) {
        // handle error
    } else {
        console.log("Alert data received", alert);
    }
});
```
## Samples

More samples can be found under `/samples` directory

Also, checkout "[Node.js SDK page](https://www.opsgenie.com/docs/api-and-client-libraries/opsgenie-nodejs-api)" for detailed documentation
