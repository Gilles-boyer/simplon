import addAttributionWithName from "../addAttributionWithName"
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['attribu'],
    components: {
        addAttributionWithName
    },
    data() {
        return {
            isEditing: null,
            userID: "",
            dialog: false,
            cache: { "disabled": true },
            invalid: true,
            buttonCreate: false,
        }
    },
    mounted() {
        this.listOfClient()
    },
    computed: {
        ...mapGetters(['getClient'])
    },
    methods: {
        ...mapActions(['listOfClient']),

        addAttribution() {
            var nickName = ""
            for (let index = 0; index < this.getClient.length; index++) {
                if (this.getClient[index].id == this.userID) {
                    nickName = this.getClient[index].nickName
                }
            }
            this.attribu.client.id = this.userID
            this.attribu.client.nickName = nickName
        },

        customFilter(item, queryText, itemText) {
            if (queryText.length > 2) {
                this.cache.disabled = false;
                const textOne = item.nickName.toLowerCase();
                const searchText = queryText.toLowerCase();
                var result = textOne.indexOf(searchText) > -1;

                if (!result) {
                    this.buttonCreate = true
                    this.invalid = true
                } else {
                    this.buttonCreate = false
                    this.invalid = false
                }
                return result

            } else if (queryText.length < 2) {
                this.cache.disabled = true;
                this.buttonCreate = false
                this.invalid = true
            }
        },
    },
}