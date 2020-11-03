export default {
    name: 'cardComputer',
    props: {
        computer: {
            type: Object,
            default: () => [{ id: null, name: null }],
        }
    },
    methods: {
        attribution() {
            var data = []
            for (let index = 8; index <= 18; index++) {
                var attribution = {
                    id: null,
                    hours: index,
                    client: {
                        id: null,
                        nickName: null,
                    }
                }
                if (this.computer.attributions.length > 0) {
                    for (let i = 0; i < this.computer.attributions.length; i++) {
                        if (attribution.hours == this.computer.attributions[i].hours) {
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