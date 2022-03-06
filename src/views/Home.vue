<template>
  <div class="active-dark bg_color--10">
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="
          justify-center
          slide slide-style-2
          fullscreen
          d-flex
          align-center
          bg_image bg_image--24
        "
        data-black-overlay="6"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            Chimp3d
          </h1>
          <p slot="description" class="description fontWeight500 text-white">
            A tua loja 3D
          </p>
          <router-link
            slot="button"
            class="btn-default btn-border btn-opacity"
            to="/contact"
            >Contacta-nos</router-link
          >
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Service Area  -->
    <div class="service-area pb--120 bg_color--10 mt-5" id="services">
      <div class="container">
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mt-10">
              <span class="subtitle">O que podemos fazer por si</span>
              <h2 class="heading-title">Serviços</h2>
            </div>
          </v-col>
        </v-row>
        <ServiceThree />
      </div>
    </div>

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 pb--140 bg_color--5">
      <v-container id="portfolio">
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center">
              <span class="subtitle">Projetos</span>
              <h2 class="heading-title">Algum do nosso trabalho</h2>
              <p class="description">
                ** There are many variations of passages of Lorem Ipsum
                available,
                <br />
                but the majority have suffered alteration. **
              </p>
            </div>
          </v-col>
        </v-row>
        <PortfolioTwo />
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start team Area  -->
    <div class="rn-team-wrapper pt--120 bg_color--1">
      <v-container id="store">
        <v-row>
          <v-col lg="12">
            <div class="section-title mb--30 text-center">
              <span class="subtitle">A nossa loja</span>
              <h2 class="heading-title">
                **Alguns dos nossos artigos disponiveis**
              </h2>
              <p class="description">
                ** There are many variations of passages of Lorem Ipsum
                available,
                <br />
                but the majority have suffered alteration. **
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamFour />

        <div class="shop_link d-flex w-100">
          <router-link
            slot="button"
            class="btn-default btn-border btn-opacity"
            to="/shop"
            >Ver loja</router-link
          >
        </div>
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 ptb--120">
      <v-container id="partners">
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Parceiros</span>
              <h2 class="heading-title">Alguns dos nossos parceiros</h2>
            </div>
          </v-col>
        </v-row>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import Header from "../components/header/Header";
import Banner from "../components/index/Banner";
// import PortfolioSix from ".ts/portfolio/PortfolioSix";
import PortfolioTwo from "../components/index/PortfolioTwo";
import TeamFour from "../components/index/TeamFour";
/* import ServiceThree from "../components/index/ServiceThree"; */

import ServiceThree from "../components/index/ServiceThree.vue";
import Brand from "../components/index/Brand";
import Footer from "../components/footer/Footer";

export default {
  components: {
    Header,
    Banner,
    // PortfolioSix,
    TeamFour,
    Brand,
    PortfolioTwo,
    ServiceThree,
    Footer,
  },
  data() {
    return {
      index: null,
      logo: require("../assets/images/logo/logo.png"),
    };
  },
};
</script>

<style scoped lang="css"></style>
