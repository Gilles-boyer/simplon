import { mapGetters, mapActions } from 'vuex'
import cardComputer from '../../components/cardComputer'
import addComputer from '../../components/modal/addComputer'
import datePicker from '../../components/datePicker'
import snackbar from '../../components/modal/snackbarConfirmation'

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
        ...mapActions(['listOfPc'])
    },
    created() {
        this.listOfPc(this.getDate)
    },
}