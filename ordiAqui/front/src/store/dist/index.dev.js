"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    Api: "http://127.0.0.1:8000/api",
    computer: {
      name: null,
      time: null,
      attribution: null
    },
    data: {
      userName: null,
      time: null,
      date: null
    },
    date: null
  },
  mutations: {},
  actions: {},
  modules: {}
});

exports["default"] = _default;