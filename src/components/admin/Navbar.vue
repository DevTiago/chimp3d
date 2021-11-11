<template>
  <nav>
<!--    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">-->
<!--      <span>Awesome! You added a new project.</span>-->
<!--      <v-btn color="white" text @click="snackbar = false">Close</v-btn>-->
<!--    </v-snackbar>-->

    <v-app-bar text app>
<!--      <v-icon @click="drawer = !drawer" class="grey&#45;&#45;text">mdi-menu</v-icon>-->
      <v-toolbar-title class="text-uppercase grey--text ml-5">
        <span class="font-weight-light">Chimp</span>
        <span>3d</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <v-btn color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Admin</span>
        </v-btn>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn small elevation="2" @click="signOut">
        <span>Terminar sessão</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app  class="warning">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="../../assets/images/logo/logo_alt.png">
          </v-avatar>

        </v-flex>
        <v-flex class="mt-4 mb-3">
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>

import firebase from 'firebase/app';

export default {
  components: {  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-printer-3d', text: 'Portfolio', route: '/admin/portfolio' },
        { icon: 'mdi-cart', text: 'Loja', route: '/admin/store' },
        { icon: 'mdi-handshake', text: 'Parceiros', route: '/admin/partners' },
      ],
      snackbar: false
    }
  },

  methods: {
    signOut() {
      firebase.auth().signOut()
      .then(_ => {
        this.$router.replace({name: "login"})
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>