# [angular-cordova-device][![Build Status](https://travis-ci.org/xelita/angular-cordova-device.png?branch=master)](https://travis-ci.org/xelita/angular-cordova-device)

This project brings [Apache Cordova](https://cordova.apache.org) (also known as [Adobe PhoneGap](http://phonegap.com)) [Device API](https://github.com/apache/cordova-plugin-device) to [AngularJS](http://angularjs.org) Mobile Apps...

## Quick start

+ Include cordovaDeviceModule.js in your Cordova application.

```html
<script src="js/cordovaDeviceModule.js"></script>
```

or use the minified version:

```html
<script src="js/cordovaDeviceModule.min.js"></script>
```

+ Add the module `cordovaDeviceModule` as a dependency to your app module:

```javascript
var myapp = angular.module('myapp', ['cordovaDeviceModule']);
```

+ Use the cordovaDeviceService as controller dependency and call cordovaDeviceService API:

```javascript
$scope.displayDeviceInformation = function() {

};
```

+ Or use the well grained `CordovaDeviceCtrl` in your HTML template:

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

## Ionic Sample

A sample based on [Ionic Framework](http://ionicframework.com) can be found here:
https://github.com/xelita/angular-cordova-plugins-sample

## Developers

Clone the repo, `git clone git://github.com/xelita/angular-cordova-device.git`.
The project is tested with `jasmine` running on `karma`.

>
``` bash
$ npm install
$ npm run bower
$ npm test
```

## Contributing

Please submit all pull requests the against master branch. If your unit test contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2014 The Enlightened Developer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
