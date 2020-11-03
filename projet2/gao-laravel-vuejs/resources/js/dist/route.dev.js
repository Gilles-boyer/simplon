"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _ExampleComponent = _interopRequireDefault(require("./components/ExampleComponent.vue"));

var _AddBook = _interopRequireDefault(require("./components/AddBook.vue"));

var _EditBook = _interopRequireDefault(require("./components/EditBook.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  name: 'home',
  path: '/',
  component: _ExampleComponent["default"]
}, {
  name: 'add',
  path: '/add',
  component: _AddBook["default"]
}, {
  name: 'edit',
  path: '/edit/:id',
  component: _EditBook["default"]
}];
exports.routes = routes;