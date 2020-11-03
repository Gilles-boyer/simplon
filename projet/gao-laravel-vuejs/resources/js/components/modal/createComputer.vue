<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" dark v-bind="attrs" v-on="on" class="font-weight-bold">
          + Ajouter un PC
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Ajouter un Ordinateur</span>
        </v-card-title>
        <v-card-text>
          <v-snackbar v-model="snackbar" timeout="2000" :centered="true">
            {{ confirmation }}

            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>

          <v-alert v-show="errors" border="top" color="red lighten-2" dark>{{
            errors
          }}</v-alert>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Nom de l'ordinateur :"
                  v-model="name"
                  @keyup="verifyData(name)"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addComputer()"
            :disabled="invalid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./createComputer.js">
</script>
