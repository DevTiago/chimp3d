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
            to="/"
            >Loja</router-link
          >
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Service Area  -->
    <div class="service-area pb--120 bg_color--10 mt-5" id="service">
      <div class="container">
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title">
              <span class="subtitle mt-5">O que podemos fazer por si</span>
              <h2 class="heading-title">Serviços</h2>
              <!--              <p class="description">-->
              <!--                There are many variations of passages of Lorem Ipsum available,-->
              <!--                <br />-->
              <!--                but the majority have suffered alteration.-->
              <!--              </p>-->
            </div>
          </v-col>
        </v-row>
        <ServiceThree />
      </div>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area  -->
    <!--    <div class="rn-portfolio-area bg_color&#45;&#45;10 ptb&#45;&#45;120">-->
    <!--      <v-container>-->
    <!--        <v-row>-->
    <!--          <v-col lg="12">-->
    <!--            <div class="text-center section-title mb&#45;&#45;30">-->
    <!--              <span class="subtitle">My complete project</span>-->
    <!--              <h2 class="heading-title">Our Project</h2>-->
    <!--              <p class="description">-->
    <!--                There are many variations of passages of Lorem Ipsum available,-->
    <!--                <br />-->
    <!--                but the majority have suffered alteration.-->
    <!--              </p>-->
    <!--            </div>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--      </v-container>-->
    <!--      <div class="wrapper plr&#45;&#45;30">-->
    <!--        <PortfolioSix />-->
    <!--        <v-row>-->
    <!--          <v-col lg="12">-->
    <!--            <div class="text-center view-more-btn mt&#45;&#45;60">-->
    <!--              <a class="btn-default" href="portfolio.html"-->
    <!--                ><span>View More Project</span></a-->
    <!--              >-->
    <!--            </div>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- End Portfolio Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 pb--140 bg_color--5">
      <v-container>
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
    <div class="rn-team-wrapper pt--120 bg_color--1" id="team">
      <v-container>
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
            to="/"
            >Ver loja</router-link
          >
        </div>
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 ptb--120">
      <v-container>
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
import Banner from "../components/slider/Banner";
// import PortfolioSix from "../components/portfolio/PortfolioSix";
import PortfolioTwo from "../components/portfolio/PortfolioTwo";
import TeamFour from "../components/team/TeamFour";
import ServiceThree from "../components/service/ServiceThree";
import Brand from "../components/brand/Brand";
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
      items: [
        {
          thumb: require("../assets/images/blog/bl-big-02.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
      ],
      index: null,
      logo: require("../assets/images/logo/logo.png"),
    };
  },
};
</script>
