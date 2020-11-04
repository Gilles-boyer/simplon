export default {
    props: ['attribution'],
    data() {
        return {
            create: false,
            firstName: "",
            lastName: "",
            invalid: true,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 3 || 'Min 3 characters',
            },
            disableCreer: true,
        }
    },
    methods: {
        addAttribution() {

        },
        verifyData() {
            if (this.firstName.length > 2 && typeof(this.firstName) == "string" && this.lastName.length > 2) {
                this.disableCreer = false
            } else {
                this.disableCreer = true
            }
        },
        closeModal() {
            this.$emit("bool", false)
        }
    },
}