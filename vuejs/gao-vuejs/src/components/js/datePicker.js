import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            dialog: false,
            date: '',
            menu: false,
        }
    },

    computed: {
        ...mapGetters(['getDate'])
    },
    methods: {
        ...mapActions(['changeDate']),

        dateChange() {
            this.$refs.menu.save(this.date)
            this.changeDate(this.date)
            console.log(this.getDate)
        }
    },
    created() {
        this.date = this.getDate
    },
};