import client from "../../service/client";
import btnClient from "./addAttibutionClient";

export default {

    props: ['attribut', 'date', 'theOrdi'],

    components: {
        btnClient,
    },

    data() {
        return {
            dialog: false,
            invalid: true,
            id: null,
            confirmation: null,
            errors: null,
            snackbar: false,
            true: "true",
            hasSaved: false,
            isEditing: true,
            model: null,
            cache: { "disabled": true },
            states: [],
            buttonCreate: false,
        };
    },

    methods: {
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
        listClient: async function() {
            var res = await client.index();
            this.states = res.data.client;
        },
        createAttribution: async function() {
            if (this.id > 0) {
                var data = {
                    client_id: this.id,
                    date: this.date,
                    computer_id: this.theOrdi.id,
                    timeStart: this.attribut.time,
                }

                var res = await client.attribution(data)
                this.attribut.nickName = res.data.client.nickName;
            } else {
                this.errors = 'Merci de choisir un utilisateur'
            }

        },
    },
    mounted() {},
};