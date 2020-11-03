import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {},
    computed: {
        ...mapGetters(['listComputers'])
    },
}