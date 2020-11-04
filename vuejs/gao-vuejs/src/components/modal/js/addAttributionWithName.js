export default {
    props: ['attribution'],
    data() {
        return {
            create: false,
            firstName: "",
            lastName: "",
            invalid: true,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 3 || 'Min 3 characters',
            },
            disableCreer: true,
        }
    },
    methods: {
        strUcFirst: function(a) {
            return (a + "").charAt(0).toUpperCase() + a.substr(1);
        },
        addAttribution() {
            var firstName = this.firstName.toLowerCase();
            firstName = this.strUcFirst(firstName);

            var lastName = this.lastName.toUpperCase();

            var nickName = firstName + " " + lastName;

            this.attribution.client.nickName = nickName;
        },
        verifyData() {
            if (this.firstName.length > 2 && typeof(this.firstName) == "string" && this.lastName.length > 2) {
                this.disableCreer = false
            } else {
                this.disableCreer = true
            }
        },
        closeModal() {
            this.$emit("bool", false)
        }
    },
}