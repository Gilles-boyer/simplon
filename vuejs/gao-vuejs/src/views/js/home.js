import { mapGetters, mapActions } from 'vuex'
import cardComputer from '../../components/cardComputer'
import addComputer from '../../components/modal/addComputer'
import datePicker from '../../components/datePicker'

export default {
    name: 'Home',
    components: {
        cardComputer,
        addComputer,
        datePicker,
    },
    computed: {
        ...mapGetters(['getListComputers'])
    },
    methods: {
        ...mapActions(['listOfPc'])
    },
    created() {
        this.listOfPc()
    },
}