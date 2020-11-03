import { mapGetters } from 'vuex'
import cardComputer from '../../components/cardComputer'

export default {
    name: 'Home',
    components: {
        cardComputer
    },
    computed: {
        ...mapGetters(['listComputers'])
    },
}