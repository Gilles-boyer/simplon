<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalComputerrDelete"
    tabindex="-1"
    aria-labelledby="modalComputerrDeleteLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-info">
          <h5
            class="modal-title font-weight-bold text-light"
            id="mmodalComputerrDeleteLabel"
          >
            Effacer un Ordinateur
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
          <div v-if="message" class="alert alert-success" role="alert">
            {{ message }}
          </div>
          Etes-vous sur de vouloir supprimer le 
          <strong class="text-danger">{{ this.$store.state.computer.name }}</strong> ?
        </div>
        <div class="modal-footer bg-info">
          <button
            type="button"
            class="btn btn-secondary font-weight-bold"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="deleteComputer()"
            type="button"
            class="btn btn-danger font-weight-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import computer from "../../service/computer";

export default {
  name: "modalComputerrDelete",

  data() {
    return {
      message: null,
    };
  },

  methods: {
    deleteComputer: async function () {
      var data = {
        id: this.$store.state.computer.id,
      };
      var res = await computer.destroy(data);

      if (res.data.response) {
        this.message = res.data.message;
        setTimeout(function () {
          location.reload();
        }, 2000);
      }
    },
  },
};
</script>