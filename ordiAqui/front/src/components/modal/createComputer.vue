<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalComputerCreate"
    tabindex="-1"
    aria-labelledby="modalComputerCreateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-info">
          <h5
            class="modal-title text-light font-weight-bold"
            id="modalComputerCreateLabel"
          >
            Ajouter Un ordinateur
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
        <div class="modal-body bg-light font-weight-bold">
          <div v-if="confirmation" class="alert alert-success" role="alert">
            {{ msgConfirmation }}
          </div>

          <div v-if="error" class="alert alert-danger" role="alert">
            <p v-for="(error, index) in listErrors" :key="index">{{ error }}</p>
          </div>

          <form>
            <div class="form-row">
              <div class="col-md-12 mb-3">
                <label for="validationDefault01">Nom de L'ordinateur</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="PC 1"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer bg-info">
          <button
            @click="createComputer()"
            type="button"
            class="btn btn-success font-weight-bold"
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import computer from "../../service/computer";

export default {
  name: "modalComputerCreate",

  data() {
    return {
      name: null,
      error: false,
      confirmation: false,
      msgConfirmation: null,
      listErrors: null,
    };
  },

  methods: {
    createComputer: async function () {
      this.error = false;

      var data = {
        name: this.name,
      };

      var res = await computer.store(data);

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