<template>
  <div class="home">
    <div class="text-center">
      <v-btn @click="logout()" color="grey" class="mt-3"
        >Logout<v-icon>mdi-logout</v-icon></v-btn
      >
    </div>

    <!-- DatePicker -->
    <datePicker />
    <!-- ---------- -->

    <!--Modal addComputer -->
    <addComputer></addComputer>
    <!-- ---------------- -->

    <v-row>
      <v-col
        cols="auto"
        md="3"
        lg="3"
        v-for="(computerData, index) in getListComputers"
        :key="index"
      >
        <!-- component Computer -->
        <cardComputer :computer="computerData" :indexPC="index"></cardComputer>
        <!-- ------------------ -->
      </v-col>
    </v-row>
    <snackbar />
  </div>
</template>

<script src="./js/home.js"></script>

