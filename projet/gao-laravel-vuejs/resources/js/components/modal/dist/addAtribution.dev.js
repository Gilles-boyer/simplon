"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../../service/client"));

var _addAttibutionClient = _interopRequireDefault(require("./addAttibutionClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['attribut', 'date', 'theOrdi'],
  components: {
    btnClient: _addAttibutionClient["default"]
  },
  data: function data() {
    return {
      dialog: false,
      invalid: true,
      id: null,
      confirmation: null,
      errors: null,
      snackbar: false,
      "true": "true",
      hasSaved: false,
      isEditing: true,
      model: null,
      cache: {
        "disabled": true
      },
      states: [],
      buttonCreate: false
    };
  },
  methods: {
    customFilter: function customFilter(item, queryText, itemText) {
      if (queryText.length > 2) {
        this.cache.disabled = false;
        var textOne = item.nickName.toLowerCase();
        var searchText = queryText.toLowerCase();
        var result = textOne.indexOf(searchText) > -1;

        if (!result) {
          this.buttonCreate = true;
          this.invalid = true;
        } else {
          this.buttonCreate = false;
          this.invalid = false;
        }

        return result;
      } else if (queryText.length < 2) {
        this.cache.disabled = true;
        this.buttonCreate = false;
        this.invalid = true;
      }
    },
    listClient: function listClient() {
      var res;
      return regeneratorRuntime.async(function listClient$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_client["default"].index());

            case 2:
              res = _context.sent;
              this.states = res.data.client;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    createAttribution: function createAttribution() {
      var data, res;
      return regeneratorRuntime.async(function createAttribution$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.id > 0)) {
                _context2.next = 8;
                break;
              }

              data = {
                client_id: this.id,
                date: this.date,
                computer_id: this.theOrdi.id,
                timeStart: this.attribut.time
              };
              _context2.next = 4;
              return regeneratorRuntime.awrap(_client["default"].attribution(data));

            case 4:
              res = _context2.sent;
              this.attribut.nickName = res.data.client.nickName;
              _context2.next = 9;
              break;

            case 8:
              this.errors = 'Merci de choisir un utilisateur';

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  },
  mounted: function mounted() {}
};
exports["default"] = _default;