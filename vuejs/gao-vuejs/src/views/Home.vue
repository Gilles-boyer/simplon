<template>
  <div class="home">
    <!--Modal addComputer -->
    <addComputer></addComputer>
    <!-- ---------------- -->
    <v-row>
      <v-col
        cols="auto"
        md="3"
        lg="3"
        v-for="computerData in getListComputers"
        :key="computerData.id"
      >
        <!-- component Computer -->
        <cardComputer :computer="computerData"></cardComputer>
        <!-- ------------------ -->
      </v-col>
    </v-row>
  </div>
</template>

<script src="./js/home.js"></script>

