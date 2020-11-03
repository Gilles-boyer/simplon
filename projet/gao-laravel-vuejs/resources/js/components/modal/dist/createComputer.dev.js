"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _computer = _interopRequireDefault(require("../../service/computer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: function data() {
    return {
      dialog: false,
      invalid: true,
      name: null,
      confirmation: null,
      errors: null,
      snackbar: false,
      "true": "true"
    };
  },
  methods: {
    verifyData: function verifyData(data) {
      if (data.length > 1) {
        this.invalid = false;
      } else {
        this.invalid = true;
      }
    },
    addComputer: function addComputer() {
      var _this = this;

      var data, res;
      return regeneratorRuntime.async(function addComputer$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.errors = null;
              data = {
                name: this.name
              };
              _context.next = 4;
              return regeneratorRuntime.awrap(_computer["default"].create(data));

            case 4:
              res = _context.sent;
              console.log(res);

              if (res.data.response) {
                this.confirmation = res.data.message;
                this.snackbar = true;
                this.name = null;
                this.$emit("addComputer", res.data.computer);
              } else {
                this.errors = res.data.errorList.name;
                setTimeout(function () {
                  return _this.errors = false;
                }, 2000);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  },
  mounted: function mounted() {}
};
exports["default"] = _default;