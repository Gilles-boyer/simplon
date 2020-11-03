<template>
  <v-row>
      <v-col 
        cols="auto" 
        md="3" lg="3"  
        v-for="computerData in listComputers" :key="computerData.id"
      >
        <cardComputer :computer = computerData ></cardComputer>
      </v-col>
  </v-row>
</template>

<script src="./js/home.js"></script>

