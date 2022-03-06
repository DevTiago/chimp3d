<template>
  <div>
    <!--    Mobile navigation drawer-->
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      absolute
      temporary
      width="320"
    >
      <v-list-item class="pa-5">
        <div class="logo">
          <img src="../../assets/images/logo/logo.png" alt="brand-image" />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="close-icon"
          icon
          @click="drawer = !drawer"
          v-html="iconSvg(closeIcon)"
        >
        </v-btn>
      </v-list-item>
    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->

    <v-app-bar
      dark
      elevation="0"
      color="transparent"
      absolute
      class="default-header"
    >
      <router-link to="/" class="logo">
        <slot name="logo"></slot>
      </router-link>
      <!-- End brand logo -->
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto">
        <v-btn :ripple="false" text @click="goToServices">Serviços</v-btn>
        <v-btn :ripple="false" text @click="goToProjects">Projectos</v-btn>
        <v-btn :ripple="false" text @click="goToStore">Loja</v-btn>
        <v-btn :ripple="false" text @click="goToPartners">Parceiros</v-btn>
        <v-btn :ripple="false" text @click="goToContacts">Contactos</v-btn>
      </v-toolbar-items>
      <!-- End header menu item -->
      <router-link to="/contact" class="logo">
        <button
          class="btn-default btn-border btn-opacity"
          target="_blank"
          href="#"
        >
          <span>Pedir orçamento</span>
        </button>
      </router-link>
      <v-btn
        :ripple="false"
        icon
        class="ma-0 pa-0 hidden-md-and-up menu_icon"
        @click="drawer = !drawer"
        v-html="iconSvg(icon)"
      >
      </v-btn>
      <!-- End mobile menu icon -->
    </v-app-bar>
    <!-- End top header navbar -->
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  data: () => ({
    drawer: false,
    icon: "menu",
    closeIcon: "x",
  }),

  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },

    goToServices() {
      this.$router.push({ path: "/", hash: "#services" });
    },

    goToProjects() {
      this.$router.push({ path: "/", hash: "#portfolio" });
    },

    goToStore() {
      this.$router.push({ path: "/", hash: "#store" });
    },

    goToPartners() {
      this.$router.push({ path: "/", hash: "#partners" });
    },

    goToContacts() {
      this.$router.push({ path: "/", hash: "#contacts" });
    },
  },
};
</script>
