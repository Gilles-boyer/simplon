  export default {
      props: {
          pc: {
              type: Object,
              default: () => [{ id: null, name: null }],
          },
          index: {
              type: Number,
              required: true
          }
      },
      data() {
          return {
              dialog: false,
          }
      },
      methods: {
          deleteComputer() {
              if (this.index == 0) {
                  this.$store.state.computers.splice(0, 1)
              } else {
                  this.$store.state.computers.splice(this.index, this.index)
              }

          }
      },
  }