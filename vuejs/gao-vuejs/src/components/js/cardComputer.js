export default {
    name: 'cardComputer',
    props: {
        computer: {
            type: Object,
            default: () => [{ id: null, name: null }],
        }
    },
    components: {},
    computed: {

    },
    mounted() {
        console.log(this.computer)
    },
}