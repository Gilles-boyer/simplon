<template>
  <v-card>
    <v-card-title class="d-flex justify-md-space-between">
      {{ computer.name }}
      <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
    </v-card-title>

     <v-card-text v-for="(attribution, index) in computer.attributions" :key="index"> 
       {{ attribution.hours }} 
       {{attribution.client.nickName}}
      </v-card-text>
  </v-card>
     
</template>
<script src="./js/cardComputer.js">
</script>