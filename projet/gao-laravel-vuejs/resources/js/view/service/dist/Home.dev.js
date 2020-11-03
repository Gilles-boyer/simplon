"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _computer = _interopRequireDefault(require("../../service/computer"));

var _ordinateur = _interopRequireDefault(require("../../components/ordinateur"));

var _createComputer = _interopRequireDefault(require("../../components/modal/createComputer.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  components: {
    ordinateur: _ordinateur["default"],
    modalCreatePc: _createComputer["default"]
  },
  data: function data() {
    return {
      listPc: [],
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false
    };
  },
  mounted: function mounted() {
    this.printAllComputer(this.date);
  },
  methods: {
    printAllComputer: function printAllComputer(date) {
      var res;
      return regeneratorRuntime.async(function printAllComputer$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_computer["default"].index(date));

            case 2:
              res = _context.sent;
              this.listPc = res.data.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    changeDate: function changeDate(date) {
      this.$refs.menu.save(this.date);
      this.printAllComputer(date);
    }
  }
};
exports["default"] = _default;