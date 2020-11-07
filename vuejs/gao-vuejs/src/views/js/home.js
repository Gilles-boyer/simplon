import { mapGetters, mapActions } from 'vuex'
import cardComputer from '../../components/cardComputer'
import addComputer from '../../components/modal/addComputer'
import datePicker from '../../components/datePicker'
import snackbar from '../../components/modal/snackbarConfirmation'
import apiLogin from '../../service/login'

export default {
    name: 'Home',
    components: {
        cardComputer,
        addComputer,
        datePicker,
        snackbar
    },
    computed: {
        ...mapGetters(['getDate']),
        ...mapGetters(['getListComputers']),
    },
    methods: {
        ...mapActions(['listOfPc']),

        logout: async function() {
            var res = await apiLogin.logout()
            console.log(res.data)
            localStorage.removeItem('token')
            this.$store.state.connected = false
            this.$router.push('/login')
        },
    },
    mounted() {
        this.listOfPc(this.getDate)
    },
}