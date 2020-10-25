<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalAwardCreateUser"
    tabindex="-1"
    aria-labelledby="modalAwardCreateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-info">
          <h5
            class="modal-title font-weight-bold text-light"
            id="modalAwardCreateLabel"
          >
            Ajouter un Utilisateur et sa Réservation
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center bg-light">
          <div v-if="confirmation" class="alert alert-success" role="alert">
            {{ msgConfirmation }}
          </div>

          <div v-if="error" class="alert alert-danger" role="alert">
            <p v-for="(error, index) in listErrors" :key="index">{{ error }}</p>
          </div>

          <form>
            <div class="form-row justify-content-center font-weight-bold">
              <div class="col-md-12 mb-3">
                <label for="validationDefault01">{{ "Nom" }}</label>
                <input
                  v-model="lastName"
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="BOYER"
                  required
                />
              </div>
              <div class="col-md-12 mb-3">
                <label for="validationDefault02">{{ "Prénom" }}</label>
                <input
                  v-model="firstName"
                  type="text"
                  class="form-control"
                  id="validationDefault02"
                  placeholder="Gilles"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer bg-info">
          <button
            @click="createAward()"
            type="button"
            class="btn btn-success font-weight-bold"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.sizelist {
  width: 300px;
}
</style>
<script>
import attributionApi from "../../service/attribution";
import userApi from "../../service/utilisateur";

export default {
  name: "modalAwardCreate",

  data() {
    return {
      firstName: null,
      lastName: null,
      error: false,
      confirmation: false,
      msgConfirmation: null,
      listErrors: null,
    };
  },

  created() {},

  methods: {
    //change first letter to uppercase
    strUcFirst: function (a) {
      return (a + "").charAt(0).toUpperCase() + a.substr(1);
    },

    //create assignement
    createAward: async function () {
      this.error = false;

      //create user///////////////////////////////
      var firstName = this.firstName.toLowerCase();
      firstName = this.strUcFirst(firstName);

      var lastName = this.lastName.toUpperCase();

      var nickName = firstName + " " + lastName;

      var data = {
        nickName: nickName,
      };

      var res = await userApi.createUser(data);
      /////////////////////////////////////////////

      //change format time to h:m
      var splitTime = this.$store.state.data.time.split(":");
      var time = splitTime[0] + ":" + splitTime[1];

      var data = {
        computer_id: this.$store.state.data.computerid,
        date: this.$store.state.data.date,
        utilisateur_id: res.data.userID.id,
        timeStart: time,
      };

      var res = await attributionApi.create(data);

      if (res.data.error) {
        this.error = true;
        this.listErrors = res.data.errorList;
      }

      if (res.data.response) {
        this.confirmation = true;
        this.msgConfirmation = res.data.message;
        setTimeout(function () {
          location.reload();
        }, 2000);
      }
    },
  },
};
</script>