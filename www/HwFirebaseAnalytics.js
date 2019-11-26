var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'HwFirebaseAnalytics', 'coolMethod', [arg0]);
};

exports.getDeviceInfo = function(arg0, success, error){
    exec(success, error, 'HwFirebaseAnalytics', 'getDeviceInfo', [arg0]);
};
