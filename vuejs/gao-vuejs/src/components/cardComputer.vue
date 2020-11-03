<template>
  <v-card>
    <v-card-title class="d-flex justify-md-space-between">
      {{ computer.name }}
      <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
    </v-card-title>

     <v-card-text> {{computer.id}} </v-card-text>
  </v-card>
     
</template>
<script src="./js/cardComputer.js">
</script>