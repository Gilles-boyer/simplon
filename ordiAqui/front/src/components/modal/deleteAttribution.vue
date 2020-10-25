<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalAttributionDelete"
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
            Effacer une Attribution
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
          Etes-vous sur de vouloir supprimer l'attribution de
          <strong class="text-danger"
            >{{ this.$store.state.data.userName }}
          </strong>
          à
          {{ this.$store.state.data.time }}
          le
          {{ this.$store.state.data.date }}
          ?
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
import attribution from "../../service/attribution";

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
        id: this.$store.state.data.attributionId,
      };
      var res = await attribution.destroy(data);

      console.log(res);

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