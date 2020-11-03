<template>
    <div class="container">
        <h3>TOTO</h3>
        <ul>
            <li v-for="(computer, index) in computers" :key="index">{{computer.name}}</li>
        </ul>


    </div>
</template>

<script>
    import computer from "../app/service/computer.js"

    export default {
        data() {
            return {
                computers: null,
            }
        },

        mounted() {
            this.printAllComputer()
        },
        methods: {
          printAllComputer: async function () {
              var res = await computer.index()
              this.computers = res.data
          }
        },
    }
</script>
