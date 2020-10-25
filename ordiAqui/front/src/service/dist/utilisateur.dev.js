"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  allUser: function allUser() {
    return _api["default"].get('utilisateurs');
  },
  createUser: function createUser(data) {
    return _api["default"].post('utilisateur/create', data);
  }
};
exports["default"] = _default;