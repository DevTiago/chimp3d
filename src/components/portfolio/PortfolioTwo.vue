<template>
  <v-row>
    <v-col cols="12">
      <div class="slick-space-gutter--15 slickdot--20">
        <VueSlickCarousel
          v-bind="settings"
          class="rn-slick-activation slick-dotted rn-slick-dot"
        >
          <!-- Start Single Portfolio  -->
          <div
            class="single_im_portfolio"
            v-for="(item, i) in portfolioContent"
            :key="i"
          >
            <div class="im_portfolio">
              <div class="thumbnail_inner">
                <div class="thumbnail">
                  <a href="portfolio-details.html">
                    <img class="w-100" :src="item.src" alt="Portfolio Images" />
                  </a>
                </div>
              </div>
              <div class="content">
                <div class="inner">
                  <div class="portfolio_heading">
                    <h4 class="heading-title">
                      <router-link to="/portfolio-details">{{
                        item.title
                      }}</router-link>
                    </h4>
                  </div>
                  <div class="portfolio_hover">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <router-link
                class="transparent_link"
                to="/portfolio-details"
              ></router-link>
            </div>
          </div>
          <!-- End Single Portfolio  -->
        </VueSlickCarousel>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      portfolioContent: [
        {
          src: require("../../assets/images/work/elite_table.png"),
          title: "Logo empresarial",
          description:
            "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
        },
        {
          src: require("../../assets/images/work/jarra.png"),
          title: "Jarra",
          description:
            "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
        },
        {
          src: require("../../assets/images/work/lamp.png"),
          title: "Candeeiro personalizado",
          description:
            "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
        },
        {
          src: require("../../assets/images/work/scooter_grip_lock.png"),
          title: "Scooter grip lock",
          description:
            "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-6.jpg"),
          title: "Imagem default",
          description: "Tamanho recomendado para imagem do portfolio",
        },
      ],
      // for all works
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        spaceBetween: 15,

        responsive: [
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 490,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
