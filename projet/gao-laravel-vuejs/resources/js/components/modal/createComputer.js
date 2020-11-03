import ordinateur from "../../service/computer";

export default {
    data() {
        return {
            dialog: false,
            invalid: true,
            name: null,
            confirmation: null,
            errors: null,
            snackbar: false,
            true: "true",
        };
    },

    methods: {
        verifyData: function(data) {
            if (data.length > 1) {
                this.invalid = false;
            } else {
                this.invalid = true;
            }
        },

        addComputer: async function() {
            this.errors = null;
            var data = {
                name: this.name,
            };
            var res = await ordinateur.create(data);

            console.log(res)

            if (res.data.response) {
                this.confirmation = res.data.message;
                this.snackbar = true;
                this.name = null

                this.$emit("addComputer", res.data.computer);
            } else {
                this.errors = res.data.errorList.name

                setTimeout(() => this.errors = false, 2000);
            }
        },
    },
    mounted() {},
};