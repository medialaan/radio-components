'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// localStorage inside RadioPlayer webview on android is null and does not allow polyfill.
var localStorage = {
  setItem: function setItem(id, val) {
    try {
      return window.localStorage.setItem(id, val);
    } catch (err) {
      console.error(err);
      return;
    }
  },
  getItem: function getItem(id) {
    try {
      return window.localStorage.getItem(id);
    } catch (err) {
      console.error(err);
      return;
    }
  },
  removeItem: function removeItem(id) {
    try {
      return window.localStorage.removeItem(id);
    } catch (err) {
      console.error(err);
      return;
    }
  },
  clear: function clear() {
    try {
      return window.localStorage.clear();
    } catch (err) {
      console.error(err);
      return;
    }
  }
};

var lastPing = void 0;

localStorage.keepalive = {
  check: function check(id, _ref) {
    var onAlive = _ref.onAlive,
        onDead = _ref.onDead;

    window.addEventListener('storage', function () {
      if (localStorage.getItem(id)) {
        lastPing = new Date().getTime();
      }
    });
    setInterval(function () {
      var two_seconds_ago = new Date() - 2000;
      if (!lastPing || lastPing < two_seconds_ago) {
        onDead && onDead();
      } else {
        onAlive && onAlive();
      }
      localStorage.removeItem(id);
    }, 1000);
  },
  startPinging: function startPinging(id) {
    setInterval(function () {
      return localStorage.setItem(id, true);
    }, 300);
  }
};
exports.default = localStorage;