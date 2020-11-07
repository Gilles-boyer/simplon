import addAttributionWithName from "../addAttributionWithName"
import { mapActions, mapGetters } from 'vuex'
import apiAttribution from "../../../service/attribution"

export default {
    props: ['attribu', 'computerId'],
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
            confirmation: null,
            error: null,
        }
    },
    mounted() {
        this.listOfClient()
    },
    computed: {
        ...mapGetters(['getClient'])
    },
    methods: {
        ...mapActions(['listOfClient', 'listOfPc']),

        addAttribution: async function() {
            var data = {
                date: this.$store.state.date,
                time: this.attribu.time,
                computer_id: this.computerId,
                client_id: this.userID
            }

            var res = await apiAttribution.create(data)

            if (res.data.error) {
                this.error = res.data.errorList
            } else {
                this.$store.state.confirmation = res.data.message
                this.$store.state.snackbar = true //open confirmation snackbar
                this.dialog = false
                this.listOfPc(this.$store.state.date)
            }
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