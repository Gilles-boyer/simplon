"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//collection of request to API for computer
var _default = {
  index: function index(page) {
    return _api["default"].get('computers?page=' + page);
  },
  store: function store(data) {
    return _api["default"].post('computer/create', data);
  },
  destroy: function destroy(data) {
    return _api["default"].post('computer/delete', data);
  }
};
exports["default"] = _default;