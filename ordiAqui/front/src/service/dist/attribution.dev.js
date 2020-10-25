"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//collection of request to API for User
var _default = {
  listAttribution: function listAttribution(id, date) {
    return _api["default"].get('awards/' + id + '/' + date);
  },
  create: function create(data) {
    return _api["default"].post('award/create', data);
  },
  update: function update(data) {
    return _api["default"].post('award/update', data);
  },
  destroy: function destroy(data) {
    return _api["default"].post('award/delete', data);
  }
};
exports["default"] = _default;