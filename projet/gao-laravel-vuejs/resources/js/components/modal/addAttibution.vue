<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
          class="font-weight-bold"
        >
          <v-icon white class="font-weight-bold"> mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col md="10"
              ><span class="headline">Attribuer un Client</span></v-col
            >
            <v-col md="2">

                <btnClient v-if="buttonCreate" @bool="dialog=$event" v-bind:data="{attribut, date, theOrdi}"></btnClient>

            </v-col
            >
          </v-row>
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
                <v-autocomplete
                  :items="states"
                  :filter="customFilter"
                  :menu-props="cache"
                  color="white"
                  v-model="id"
                  :hide-no-data="true"
                  item-value="id"
                  item-text="nickName"
                  label="Client"
                  @click="listClient()"
                ></v-autocomplete>
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
          <v-btn color="blue darken-1" @click="createAttribution()" text :disabled="invalid"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./addAtribution.js">
</script>
