import deleteComputer from "../modal/deleteComputer"
import deleteAttribution from "../modal/deleteAttribution"

export default {
    name: 'cardComputer',
    components: {
        deleteComputer,
        deleteAttribution,
    },
    props: {
        computer: {
            type: Object,
            default: () => [{ id: null, name: null }],
        },
        indexPC: {
            type: Number,
            required: true
        }
    },
    methods: {
        attribution() {
            var data = []
            for (let index = 8; index <= 18; index++) {
                var attribution = {
                    id: null,
                    hours: index + "h00",
                    client: {
                        id: null,
                        nickName: null,
                    }
                }
                if (this.computer.attributions.length > 0) {
                    for (let i = 0; i < this.computer.attributions.length; i++) {
                        if (attribution.hours == this.computer.attributions[i].hours + "h00") {
                            this.computer.attributions[i].hours = this.computer.attributions[i].hours + "h00"
                            attribution = this.computer.attributions[i]
                        }
                    }
                }
                data.push(attribution)
            }
            this.computer.attributions = data;
        }
    },
    mounted() {
        this.attribution()
    },
}