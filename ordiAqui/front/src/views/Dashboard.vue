<template>
  <div class="container-fluid">
    <nav class="font-weight-bold">
      <div class="form-row justify-content-center font-weight-bold">
        <div class="col-md-3 input-group mb-3 text-center">
          <input
            v-model="date"
            type="date"
            class="form-control font-weight-bold"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              @click="datepicker()"
              class="btn btn-outline-light font-weight-bold"
              type="button"
              id="button-addon2"
            >
              OK
            </button>
          </div>
        </div>
        <div
          class="col-md-10 input-group mb-3 text-center justify-content-center"
        >
          <button
            title="Ajouter un ordinateur"
            type="button"
            class="btn btn-success m-1 font-weight-bold"
            data-toggle="modal"
            data-target="#modalComputerCreate"
          >
            + Ajouter un ordinateur
          </button>
        </div>
        <div class="col-md-10 input-group mb-3 justify-content-center">
          <button
            v-if="buttonPrevioux"
            class="btn btn-dark font-weight-bold m-1"
            @click="previous()"
          >
            {{ "<" }}
          </button>
          <logout class="m-1" />
          <button
            v-if="buttonNext"
            class="btn btn-dark font-weight-bold m-1"
            @click="next()"
          >
            {{ ">" }}
          </button>
        </div>
      </div>
    </nav>

    <div class="row">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card col-md-3 bg-info pb-2"
      >
        <h5 class="card-header font-weight-bold text-light">{{ card.name }}</h5>

        <button
          title="Supprimer un PC"
          type="button"
          class="btn btn-danger m-1 font-weight-bold"
          data-toggle="modal"
          data-target="#modalComputerrDelete"
          @click="defineCard(card)"
        >
          Sup
        </button>
        <deleteComputer />
        <ul v-for="(data, i) in card.attribution" :key="i" class="list-group">
          <li class="list-group-item p-1">
            <div class="row">
              <div class="col-md-2">
                <div class="badge badge-pill badge-secondary">
                  {{ data.time }}
                </div>
              </div>
              <div class="col-md-6 text-primary font-weight-bold">
                {{ data.userName }}
              </div>
              <div class="col-md-4 row justify-content-center">
                <button
                  class="btn btn-success font-weight-bold"
                  v-if="!data.userName"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalAwardCreate"
                  @click="defineData(data)"
                >
                  +
                </button>

                <button
                  class="btn btn-secondary col-md-5 m-0 p-0 mr-1 font-weight-bold"
                  v-if="data.userName"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalAttributionUpdate"
                  @click="defineData(data)"
                >
                  Mod
                </button>
                <button
                  class="btn btn-danger col-md-5 m-0 p-0 font-weight-bold"
                  v-if="data.userName"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalAttributionDelete"
                  @click="defineData(data)"
                >
                  Sup
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--Modal -->
    <computerCreate />
    <attributionCreate />
    <modalAttributionDelete />
    <modalAttributionUdapte />
  </div>
</template>
<script>
import logout from "../components/dashboard/Logout";
import computerCreate from "../components/modal/createComputer";
import deleteComputer from "../components/modal/deleteComputer";
import computers from "../service/computer";
import attribution from "../service/attribution";
import attributionCreate from "../components/modal/createAssignement";
import modalAttributionDelete from "../components/modal/deleteAttribution";
import modalAttributionUdapte from "../components/modal/updateAssignement";

export default {
  name: "dashboard",

  data() {
    return {
      date: "",
      cards: null,
      page: 1,
      buttonPrevioux: false,
      buttonNext: false,
    };
  },

  components: {
    logout,
    computerCreate,
    deleteComputer,
    attributionCreate,
    modalAttributionDelete,
    modalAttributionUdapte,
  },

  created() {
    //check token
    if (localStorage.getItem("token") == null) {
      this.$router.push({ path: "/" });
    }

    //loading date today
    this.today();
  },

  mounted() {
    this.printCard();
  },

  methods: {
    previous: function () {
      this.page = this.page - 1;
      this.printCard();
    },
    next: function () {
      this.page = this.page + 1;
      this.printCard();
    },
    //this function return today's date with good format
    TodaysDate: function () {
      var date = new Date();
      var years = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      var dateToday = years + "-" + month + "-" + day;

      return dateToday;
    },

    defineCard: function (card) {
      this.$store.state.computer = card;
    },

    //this function attribute the today's date for the datepicker
    today: function () {
      this.date = this.TodaysDate();
    },

    //this function change integer in the format time: hh:mm:ss
    changeFormatTime: function (integer) {
      if (integer < 10) {
        var time = "0" + integer + ":" + "00" + ":" + "00";
        return time;
      } else {
        var time = integer + ":" + "00" + ":" + "00";
        return time;
      }
    },

    //change date for the planning
    datepicker: function () {
      this.printCard();
    },

    //this function attribute element for to print a card by computer
    printCard: async function () {
      //button previoux
      if (this.page > 1) {
        this.buttonPrevioux = true;
      } else {
        this.buttonPrevioux = false;
      }
      if (this.page < 1) {
        this.page = 1;
      }

      //api list computer
      var res = await computers.index(this.page);

      var card = [];

      var dataComputers = res.data.computers.data;

      //button next//////////////////////////////////
      if (this.page > res.data.computers.last_page) {
        this.page = res.data.computers.last_page;
      }
      if (res.data.computers.last_page == this.page) {
        this.buttonNext = false;
      } else if (res.data.computers.last_page > 1) {
        this.buttonNext = true;
      } else {
        this.buttonNext = false;
      }
      ///////////////////////////////////////////////

      for (let i = 0; i < dataComputers.length; i++) {
        var computer = {
          id: null,
          name: null,
          attribution: [],
        };

        computer.id = dataComputers[i].id;
        computer.name = dataComputers[i].name;

        //api list attributions by computer
        var check = await attribution.listAttribution(
          dataComputers[i].id,
          this.date
        );

        for (let integer = 8; integer <= 17; integer++) {
          var time = this.changeFormatTime(integer);
          var dataAttribution = {
            time: null,
            computerid: null,
            date: null,
          };
          if (check.data.data.length > 0) {
            //check hours for to see if you have an assignement
            for (
              let indexCheck = 0;
              indexCheck < check.data.data.length;
              indexCheck++
            ) {
              if (time == check.data.data[indexCheck].time) {
                dataAttribution.time = time;
                dataAttribution.userName =
                  check.data.data[indexCheck].user.nickName;
                dataAttribution.userId = check.data.data[indexCheck].user.id;
                dataAttribution.attributionId = check.data.data[indexCheck].id;
              } else {
                dataAttribution.time = time;
                dataAttribution.computerid = computer.id;
                dataAttribution.date = this.date;
              }
            }
          } else {
            dataAttribution.time = time;
            dataAttribution.computerid = computer.id;
            dataAttribution.date = this.date;
          }
          computer.attribution.push(dataAttribution);
        }
        card.push(computer);
      }
      this.cards = card;
    },
    defineData: function (data) {
      this.$store.state.data = data;
      console.log(data);
    },
  },
};
</script>
