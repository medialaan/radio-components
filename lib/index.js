'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./localStorage/index.js');

Object.defineProperty(exports, 'localStorage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _index2 = require('./utils/index.js');

Object.defineProperty(exports, 'on', {
  enumerable: true,
  get: function get() {
    return _index2.on;
  }
});
Object.defineProperty(exports, 'isVisible', {
  enumerable: true,
  get: function get() {
    return _index2.isVisible;
  }
});
Object.defineProperty(exports, 'urlFor', {
  enumerable: true,
  get: function get() {
    return _index2.urlFor;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }