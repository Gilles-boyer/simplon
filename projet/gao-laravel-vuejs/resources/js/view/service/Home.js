import computer from "../../service/computer";
import ordinateur from "../../components/ordinateur"
import modalCreatePc from "../../components/modal/createComputer.vue"

export default {
    components: {
        ordinateur,
        modalCreatePc,
    },

    data() {
        return {
            listPc: [],
            dialog: false,
            date: new Date().toISOString().substr(0, 10),
            menu: false,
        }
    },

    mounted() {
        this.printAllComputer(this.date);
    },

    methods: {

        printAllComputer: async function(date) {
            var res = await computer.index(date);
            this.listPc = res.data.data;
        },
        changeDate: function(date) {
            this.$refs.menu.save(this.date)
            this.printAllComputer(date)
        }

    },
};