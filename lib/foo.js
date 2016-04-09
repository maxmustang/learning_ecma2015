"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Foo = function () {
  function Foo() {
    (0, _classCallCheck3.default)(this, Foo);
  }

  (0, _createClass3.default)(Foo, [{
    key: "method",
    value: function method() {}
  }, {
    key: "addAll",
    value: function addAll() {
      return (0, _from2.default)(arguments).reduce(function (a, b) {
        return a + b;
      });
    }
  }]);
  return Foo;
}();