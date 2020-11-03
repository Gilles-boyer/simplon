<template>
  <v-card class="pa-3" outlined tile>
    <v-card-title>
      <v-row>
        <v-col cols="auto" md="10">
          {{ ordinateur.name }}
        </v-col>
        <v-col cols="auto" md="2">
        <v-btn icon fab dark color="red" >
          <v-icon white class="font-weight-bold"> mdi-delete </v-icon>
        </v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <v-row v-for="(data, index) in dataForCard" :key="index">
      <v-col cols="auto" md="2" class="mt-3">
        {{ data.time }}
      </v-col>
      <v-col cols="auto" md="7" class="text-center mx-auto mt-3">
        {{ data.nickName }}
      </v-col>
      <v-col cols="auto" md="3" class="text-center">
        <addAtrib
            v-bind:attribut='data' v-bind:date='thedate'
            v-if="!data.nickName"
            v-bind:theOrdi="ordinateur"
        ></addAtrib>
        <v-btn icon fab dark color="red" v-if="data.nickName">
          <v-icon white class="font-weight-bold"> mdi-delete </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script src="./service/ordinateur.js"></script>
