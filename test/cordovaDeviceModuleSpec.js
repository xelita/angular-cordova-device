describe("cordovaDeviceModule Tests Suite", function () {

    // cordovaDeviceConstants

    describe("cordovaDeviceConstants Tests", function () {

        var cordovaDeviceConstants;

        beforeEach(function () {
            module('cordovaDeviceModule');
            inject(function (_cordovaDeviceConstants_) {
                cordovaDeviceConstants = _cordovaDeviceConstants_;
            });
        });

        it("apiVersion", function () {
            expect(cordovaDeviceConstants.apiVersion).toBe('1.0.0');
        });
    });

    // cordovaDeviceService

    describe("cordovaDeviceService Tests", function () {

        var cordovaDeviceService;
        var cordovaDeviceConstants;

        beforeEach(function () {
            module('cordovaDeviceModule');
            inject(function (_cordovaDeviceService_, _cordovaDeviceConstants_) {
                cordovaDeviceService = _cordovaDeviceService_;
                cordovaDeviceConstants = _cordovaDeviceConstants_;
            });
            window.device = null;
        });

        it("getDeviceValue should return null if device plugin is not installed", function () {
            expect(cordovaDeviceService.getDeviceValue('cordova')).toBeNull();
        });

        it("getDeviceValue should return device underlying value if device plugin is installed", function () {
            var expectedDeviceValue = 'expectedValue';
            window.device = {'cordova': expectedDeviceValue};
            expect(cordovaDeviceService.getDeviceValue('cordova')).toBe(expectedDeviceValue);
        });

        it("cordova should return null if device plugin is not installed", function () {
            expect(cordovaDeviceService.cordova()).toBeNull();
        });

        it("cordova should return cordova value if device plugin is installed", function () {
            var expectedDeviceValue = 'expectedValue';
            window.device = {'cordova': expectedDeviceValue};
            expect(cordovaDeviceService.cordova()).toBe(expectedDeviceValue);
        });

        it("platform should return null if device plugin is not installed", function () {
            expect(cordovaDeviceService.platform()).toBeNull();
        });

        it("platform should return platform value if device plugin is installed", function () {
            var expectedDeviceValue = 'expectedValue';
            window.device = {'platform': expectedDeviceValue};
            expect(cordovaDeviceService.platform()).toBe(expectedDeviceValue);
        });

        it("uuid should return null if device plugin is not installed", function () {
            expect(cordovaDeviceService.uuid()).toBeNull();
        });

        it("uuid should return uuid value if device plugin is installed", function () {
            var expectedDeviceValue = 'expectedValue';
            window.device = {'uuid': expectedDeviceValue};
            expect(cordovaDeviceService.uuid()).toBe(expectedDeviceValue);
        });

        it("version should return null if device plugin is not installed", function () {
            expect(cordovaDeviceService.version()).toBeNull();
        });

        it("version should return version value if device plugin is installed", function () {
            var expectedDeviceValue = 'expectedValue';
            window.device = {'version': expectedDeviceValue};
            expect(cordovaDeviceService.version()).toBe(expectedDeviceValue);
        });

        it("model should return null if device plugin is not installed", function () {
            expect(cordovaDeviceService.model()).toBeNull();
        });

        it("model should return model value if device plugin is installed", function () {
            var expectedDeviceValue = 'expectedValue';
            window.device = {'model': expectedDeviceValue};
            expect(cordovaDeviceService.model()).toBe(expectedDeviceValue);
        });
    });

    // cordovaDeviceController

    describe("cordovaDeviceController Tests", function () {

        var scope;
        var cordovaDeviceCtrl;
        var cordovaDeviceService;

        beforeEach(function () {
            module('cordovaDeviceModule');
            inject(function ($rootScope, $controller, _cordovaDeviceService_) {
                scope = $rootScope.$new();

                cordovaDeviceService = _cordovaDeviceService_;
                cordovaDeviceCtrl = $controller('CordovaDeviceCtrl', {
                    $scope: scope,
                    cordovaDeviceService: cordovaDeviceService
                });
            });
        });

        it("cordovaDeviceService should be exposed in cordovaDeviceCtrl scope", function () {
            expect(scope.deviceService).toBe(cordovaDeviceService);
        });
    });
});