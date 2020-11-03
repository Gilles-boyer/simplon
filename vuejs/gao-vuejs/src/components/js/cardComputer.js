export default {
    name: 'cardComputer',
    props: {
        computer: {
            type: Object,
            default: () => [{ id: null, name: null }],
        }
    },
}