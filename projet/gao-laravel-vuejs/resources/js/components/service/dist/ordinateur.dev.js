"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _addAttibution = _interopRequireDefault(require("../modal/addAttibution"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['ordinateur', 'thedate'],
  components: {
    addAtrib: _addAttibution["default"]
  },
  watch: {
    ordinateur: function ordinateur() {
      this.initialize();
    }
  },
  created: function created() {
    this.initialize();
  },
  data: function data() {
    return {
      attribution: [],
      dataForCard: []
    };
  },
  methods: {
    //parcourir la liste des attribution pour créer une nouvelle liste (this.attibutions)
    //avec pour 'key' l'horraire et comme 'value' {nom, prenom} (Client)
    initialize: function initialize() {
      if (this.dataForCard) {
        this.dataForCard = [];
        this.attribution = [];
      }

      if (this.ordinateur.attribution) {
        var data = this.ordinateur.attribution;

        for (var index = 0; index < data.length; index++) {
          var result = {
            time: null,
            nickName: null
          };
          result.time = this.timeFormat(data[index].timeStart);
          result.nickName = data[index].client.nickName;
          this.attribution.push(result);
        }
      }

      this.displayHoraire();
    },
    timeFormat: function timeFormat(time) {
      var data = time.split(':');
      var newTime = data[0] + ':00';
      return newTime;
    },
    //function 'displayHoraire' permettant de créer la collection des horaire [8:18]
    //et en y liant les attributions si ils existent
    displayHoraire: function displayHoraire() {
      var timeStart = 8;
      var timeEnd = 18;

      for (var index = timeStart; index <= timeEnd; index++) {
        var result = {
          time: null,
          nickName: null
        };

        if (index < 10) {
          result.time = '0' + index + ":00";
        } else {
          result.time = index + ":00";
        }

        this.dataForCard.push(result);
      }

      for (var _index = 0; _index < this.attribution.length; _index++) {
        for (var i = 0; i < this.dataForCard.length; i++) {
          if (this.attribution[_index].time == this.dataForCard[i].time) {
            this.dataForCard[i].nickName = this.attribution[_index].nickName;
          }
        }
      }
    }
  }
};
exports["default"] = _default;