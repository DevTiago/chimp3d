<template>
  <div class="active-dark bg_color--10">
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!--   <div style="background-color: green" class="">
      <v-container>
        <Contact />
      </v-container>
    </div> -->

    <div class="contact-area pb--120 bg_color--10">
      <div class="container">
        <Contact />
      </div>
    </div>

    <!-- End Header Area -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/Header.vue";
import Contact from "../components/contact/Contact.vue";
import ServiceThree from "../components/index/ServiceThree";
import emailjs from 'emailjs-com';


import Footer from "../components/footer/Footer";

export default {
  components: {
    Header,
    Contact,
    ServiceThree,
    Footer,
  },
  data() {
    return {
      logo: require("../assets/images/logo/logo.png"),
    };
  },
};
</script>

<style scoped></style>
