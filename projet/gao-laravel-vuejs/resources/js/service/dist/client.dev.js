"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//collection of request to API for computer
var _default = {
  index: function index() {
    return _api["default"].get('clients/search');
  },
  attribution: function attribution(data) {
    return _api["default"].post('attribution/create', data);
  },
  createUser: function createUser(data) {
    return _api["default"].post('client/create', data);
  }
};
exports["default"] = _default;