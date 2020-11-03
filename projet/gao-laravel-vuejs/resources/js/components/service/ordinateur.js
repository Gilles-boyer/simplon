import addAtrib from '../modal/addAttibution'

export default {

    props: ['ordinateur', 'thedate'],

    components: {
        addAtrib,
    },

    watch: {
        ordinateur: function() {
            this.initialize()
        }
    },

    created() {
        this.initialize()
    },

    data() {
        return {
            attribution: [],
            dataForCard: [],
        }
    },

    methods: {
        //parcourir la liste des attribution pour créer une nouvelle liste (this.attibutions)
        //avec pour 'key' l'horraire et comme 'value' {nom, prenom} (Client)
        initialize: function() {
            if (this.dataForCard) {
                this.dataForCard = []
                this.attribution = []
            }
            if (this.ordinateur.attribution) {
                var data = this.ordinateur.attribution
                for (let index = 0; index < data.length; index++) {
                    var result = {
                        time: null,
                        nickName: null,
                    }
                    result.time = this.timeFormat(data[index].timeStart)
                    result.nickName = data[index].client.nickName

                    this.attribution.push(result)
                }
            }
            this.displayHoraire()
        },

        timeFormat: function(time) {
            var data = time.split(':')
            var newTime = data[0] + ':00'
            return newTime
        },

        //function 'displayHoraire' permettant de créer la collection des horaire [8:18]
        //et en y liant les attributions si ils existent
        displayHoraire: function() {
            var timeStart = 8
            var timeEnd = 18

            for (let index = timeStart; index <= timeEnd; index++) {
                var result = {
                    time: null,
                    nickName: null,
                }

                if (index < 10) {
                    result.time = '0' + index + ":00"
                } else {
                    result.time = index + ":00"
                }

                this.dataForCard.push(result)
            }
            for (let index = 0; index < this.attribution.length; index++) {
                for (let i = 0; i < this.dataForCard.length; i++) {
                    if (this.attribution[index].time == this.dataForCard[i].time) {
                        this.dataForCard[i].nickName = this.attribution[index].nickName
                    }
                }
            }
        }
    },
}