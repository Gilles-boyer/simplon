import { mapActions } from 'vuex'
export default {
    data: () => ({
        valid: true,
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length <= 10) || 'Password must be less than 6 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods: {
        ...mapActions(['changeStatutConnected']),
        validate() {
            this.$refs.form.validate()
            if (
                this.password == this.$store.state.login.password &&
                this.email == this.$store.state.login.email) {
                this.changeStatutConnected(true)
                this.$router.push('/')
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}