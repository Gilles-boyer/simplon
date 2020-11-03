export default {
    props: ['attribu'],
    data() {
        return {
            isEditing: null,
            userID: "",
            dialog: false,
            client: [
                { id: 1, nickName: 'Boyer Gilles' },
                { id: 2, nickName: 'Boyer Lynda' },
                { id: 3, nickName: 'Boyer Emilie' },
                { id: 4, nickName: 'Boyer Emmanuelle' },
            ],
            cache: { "disabled": true },
            invalid: true,
            buttonCreate: false,
        }
    },
    methods: {
        addAttribution() {
            var nickName = ""
            for (let index = 0; index < this.client.length; index++) {
                if (this.client[index].id == this.userID) {
                    nickName = this.client[index].nickName
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