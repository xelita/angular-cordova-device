/**
 * Angular Module relying on Apache Cordova Device Plugin.
 */
var cordovaDeviceModule = angular.module('cordovaDeviceModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaDeviceModule.constant('cordovaDeviceConstants', {
    apiVersion: '1.0.0',
    unavailable: 'N/A'
});

// Services

/**
 * Main service relying on Apache Cordova Device Plugin.
 */
cordovaDeviceModule.factory('cordovaDeviceService', ['$log', 'cordovaDeviceConstants', function ($log, cordovaDeviceConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaDeviceService.apiVersion.');
            return cordovaDeviceConstants.apiVersion;
        },

        /**
         * Get the version of Cordova running on the device.
         * For more information: http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#device.cordova
         */
        cordova: function () {
            $log.debug('cordovaDeviceService.cordova.');
            return this.getDeviceValue('cordova');
        },

        /**
         * Get the device's operating system name.
         * For more information: http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#device.platform
         */
        platform: function () {
            $log.debug('cordovaDeviceService.platform.');
            return this.getDeviceValue('platform');
        },

        /**
         * Get the device's Universally Unique Identifier (UUID).
         * For more information: http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#device.uuid
         */
        uuid: function () {
            $log.debug('cordovaDeviceService.uuid.');
            return this.getDeviceValue('uuid');
        },

        /**
         * Get the operating system version.
         * For more information: http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#device.version
         */
        version: function () {
            $log.debug('cordovaDeviceService.version.');
            return this.getDeviceValue('version');
        },

        /**
         * Get the device's model name.
         * For more information: http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#device.model
         */
        model: function () {
            $log.debug('cordovaDeviceService.model.');
            return this.getDeviceValue('model');
        },

        /**
         * Return the device parameter value.
         * @param name the parameter name.
         */
        getDeviceValue: function (name) {
            $log.debug('cordovaDeviceService.value.');
            if (!window.device) {
                return cordovaDeviceConstants.unavailable;
            }
            return window.device[name];
        }
    };
}]);


// Controllers

/**
 * Convenience controller that registers service in its scope.
 */
cordovaDeviceModule.controller('CordovaDeviceCtrl', ['$scope', 'cordovaDeviceService' , function ($scope, cordovaDeviceService) {

    $scope.deviceService = cordovaDeviceService;
}]);