angular-device
==============

Bring Apache Cordova Device API to AngularJS Apps...

Define a simple service to deal with Cordova Device Plugin (http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#Device). 

[![Build Status](https://travis-ci.org/xelita/angular-device.png?branch=master)](https://travis-ci.org/xelita/angular-device)

Usage
-----
Include cordovaDeviceModule.js in your Cordova application.

```html
<script src="js/cordovaDeviceModule.js"></script>
```

Add the module `cordovaDeviceModule` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['cordovaDeviceModule']);
```

You can now start using the Cordova Device API though the `CordovaDeviceCtrl`:

```html
<div ng-controller="CordovaDeviceCtrl">
    <h1>Angular Service For Cordova Device Plugin</h1>
    <div>
        <p>Device API: {{deviceService.apiVersion()}}</p>                
        <p>Device cordova: {{deviceService.cordova()}}</p>
        <p>Device platform: {{deviceService.platform()}}</p>
        <p>Device uuid: {{deviceService.uuid()}}</p>
        <p>Device version: {{deviceService.version()}}</p>
        <p>Device model: {{deviceService.model()}}</p>
    </div>
</div>
```

License
-----

Released under the terms of MIT License.
