<template>
  <v-card>
    <v-card-title class="d-flex justify-md-space-between text-light bg-primary">
      {{ computer.name }}
      <v-btn icon><v-icon color="red" >mdi-delete</v-icon></v-btn>
    </v-card-title>

     <v-card-text> 
       <v-row v-for="(attribution, index) in computer.attributions" :key="index"> 
         <v-col  md="2" class="font-weight-bold" >
           {{ attribution.hours }} 
         </v-col>
         <v-col  md="7" class="text-center font-weight-bold text-primary"  >
           {{ attribution.client.nickName }}
         </v-col>
         <v-col  md="2" >

         </v-col>
       </v-row>
      </v-card-text>
  </v-card>
     
</template>
<script src="./js/cardComputer.js">
</script>