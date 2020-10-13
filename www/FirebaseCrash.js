var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseCrash";

module.exports = {
    log: function(message) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "log", [message]);
        });
    },
    logError: function(message) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "logError", [message]);
        });
    },
    setUserId: function(userId) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setUserId", [userId]);
        });
    },
    setCustomKey: function(key, value) {
        return new Promise(function(resolve, reject) {
            if (typeof key !== "string") {
                return reject(new TypeError("Key must be a string"));
            }
            exec(resolve, reject, PLUGIN_NAME, "setCustomKey", [key, value]);
        });
    },
    setEnabled: function(enabled) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setEnabled", [enabled]);
        });
    }
};
