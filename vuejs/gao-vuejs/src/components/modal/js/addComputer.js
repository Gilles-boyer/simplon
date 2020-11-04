import { mapActions } from 'vuex'

export default {
    name: 'addComputer',

    data: () => ({
        dialog: false,
        name: "",
        disableCreer: true,
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 3 || 'Min 3 characters',
        },
    }),

    methods: {
        verifyData() {
            if (this.name.length > 2 && typeof(this.name) == "string") {
                this.disableCreer = false
            } else {
                this.disableCreer = true
            }
        },

        addComputer() {
            var data = {
                id: 4,
                name: this.name,
                attributions: []
            }
            this.addNewComputer(data)
            this.name = ""
            this.dialog = false
        },

        ...mapActions(['addNewComputer'])
    },

}