<template>
  <v-app class="grey lighten-4">
    <Navbar/>

    <v-main class="mb-4 main-div">
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

import Navbar from "../components/admin/Navbar";

export default {
  components: {Navbar},
  data() {
    return {};
  },

  methods: {}
};

</script>

<style scoped lang="css">
.main-div {
  padding: 60px 120px!important;
}
</style>


