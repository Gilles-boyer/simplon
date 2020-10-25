<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalAttributionUpdate"
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
            Modifier Une Réservation
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
          <h5 class="font-weight-bold text-info">
            {{ "Utilisteur actuelle : " + this.$store.state.data.userName }}
          </h5>
          <form>
            <div class="form-row justify-content-center font-weight-bold">
              <div class="col-md-12 mb-3">
                <label for="validationDefault01"
                  >Changer l'utilisateur par :</label
                >
                <input
                  list="nickName"
                  v-model="selected"
                  required
                  class="custom-select"
                  autocomplete="off"
                  @keyup="formButton()"
                />
                <datalist id="nickName" class="sizelist">
                  <option
                    v-for="(user, index) in listUser"
                    :key="index"
                    v-bind:value="user.id + ' ' + user.nickName"
                  ></option>
                </datalist>
              </div>
              <button
                v-if="button"
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#modalAwardCreateUser"
              >
                + Ajouter un utilisateur
              </button>
              <createUserModal />
            </div>
          </form>
        </div>
        <div class="modal-footer bg-info">
          <button
            @click="updateAward()"
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
import createUserModal from "./createAssignementUser";

export default {
  name: "modalAwardCreate",

  components: {
    createUserModal,
  },

  data() {
    return {
      selected: null,
      listUser: [],
      error: false,
      confirmation: false,
      msgConfirmation: null,
      listErrors: null,
      button: false,
    };
  },

  created() {
    this.printSelectUser();
  },

  methods: {
    //print alluser for select
    printSelectUser: async function () {
      var res = await userApi.allUser();

      this.listUser = res.data.users;
    },

    //create new assignement
    updateAward: async function () {
      this.error = false;
      var str = this.selected.split(" ");
      var id = parseInt(str[0]);

      var splitTime = this.$store.state.data.time.split(":");
      var time = splitTime[0] + ":" + splitTime[1];

      if (id > 0) {
        var data = {
          id: this.$store.state.data.attributionId,
          computer_id: this.$store.state.data.computerid,
          date: this.$store.state.data.date,
          utilisateur_id: id,
          timeStart: time,
        };

        var res = await attributionApi.update(data);

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
      } else {
        this.error = true;
        this.listErrors = [
          "L'utilisateur n'a pas pu être identifié, Merci de selectioner ou de créer un utilisateur",
        ];
      }
    },

    //verify condition for to see or not button for to create new user
    formButton: function () {
      var str = this.selected.split(" ");
      var check = parseInt(str[0]);
      if (this.selected.length > 3) {
        if (check > 0) {
          this.button = false;
        } else {
          this.button = true;
        }
      } else {
        this.button = false;
      }
    },
  },
};
</script>