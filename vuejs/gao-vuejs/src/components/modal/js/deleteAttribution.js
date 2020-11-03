export default {
    props: ['attribu'],
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        deleteAttribution() {
            this.attribu.client.id = null
            this.attribu.client.nickName = null
        }
    },
}