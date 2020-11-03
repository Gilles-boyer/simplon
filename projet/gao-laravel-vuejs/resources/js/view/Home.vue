<template>
  <v-container fluid>
    <v-row justify='center'>
      <v-col md="2">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Picker in menu"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="changeDate(date)"> OK </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <modalCreatePc @addComputer="listPc = $event" />

    <v-row space-between>
      <v-col v-for="(ordinateur, index) in listPc" v-bind:key="index" md="3">
        <ordinateur
            v-bind:ordinateur="ordinateur"
            v-bind:thedate="date"
        ></ordinateur>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./service/Home"></script>
