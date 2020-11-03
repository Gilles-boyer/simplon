<template>
  <v-row justify="center">
    <v-dialog v-model="create" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
          class="font-weight-bold"
        >
          <v-icon> mdi-plus </v-icon> <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col md="10"
              ><span class="headline">Attribuer un Client</span></v-col
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
                <v-text-field
                  label="Prénom :"
                  v-model="firstName"
                  @keyup="verifyData()"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Nom :"
                  v-model="lastName"
                  @keyup="verifyData()"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal()">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            @click="createUser()"
            text
            :disabled="invalid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import client from "../../service/client"

export default {

    props:['data'],

  data() {
    return {
      create: false,
      invalid: true,
      firstName: null,
      lastName:null,
      confirmation: null,
      errors: null,
      snackbar: false,
      true: "true",
      hasSaved: false,
      isEditing: true,
      model: null,
      cache: { disabled: true },
      states: [],
      buttonCreate: false,
    };
  },

  methods: {
    //change first letter to uppercase
    strUcFirst: function (a) {
      return (a + "").charAt(0).toUpperCase() + a.substr(1);
    },
    createUser: async function () {
    //create user///////////////////////////////
      var firstName = this.firstName.toLowerCase();
      firstName = this.strUcFirst(firstName);

       var lastName = this.lastName.toUpperCase();

      var nickName = firstName + " " + lastName;

      var data = {
        nickName: nickName,
      };
        this.data.attribut.nickName = nickName
      var res = await client.createUser(data);
      this.createAttribution(res.data.userID.id)
    },
    verifyData: function () {
        if(this.firstName.length> 1) {
            if( this.lastName.length>1) {
                return this.invalid  = false
            }
        }
        this.invalid = true
    },

    closeModal: function () {
        this.$emit("bool", false)
    },
    createAttribution: async function (id) {
      var dat = {
        client_id: id,
        date: this.data.date,
        computer_id: this.data.theOrdi.id,
        timeStart: this.data.attribut.time,
      };

      var results = await client.attribution(dat);
      this.data.attribut.nickName = results.data.client.nickName;

      console.log(results)
      if(results.data.client.nickName){
         this.$emit("bool", false)
      }
    },
  },
  mounted() {
     this.$emit("bool", true)
  },
};
</script>
