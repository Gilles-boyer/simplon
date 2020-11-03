import { mapGetters } from 'vuex'
import cardComputer from '../../components/cardComputer'
import addComputer from '../../components/modal/addComputer'

export default {
    name: 'Home',
    components: {
        cardComputer,
        addComputer
    },
    computed: {
        ...mapGetters(['getListComputers'])
    },
}