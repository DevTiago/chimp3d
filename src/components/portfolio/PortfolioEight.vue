<template>
  <div>
    <!-- Start Portfolio Activation  -->
  </div>
</template>

<script>
  // import VueSlickCarousel from "vue-slick-carousel";
  export default {
    components: {},
    data() {
      return {
        portfolioContent: [
          {
            src: require("../../assets/images/portfolio/interior/portfolio-8.jpg"),
            category: "Interior",
            title: "Kitchen Collection",
            description:
              "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-9.jpg"),
            category: "Home Design",
            title: "Office Decoration",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-10.jpg"),
            category: "Interior",
            title: "Bedroom Lighting",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-11.jpg"),
            category: "Interior",
            title: "Home Interior",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-9.jpg"),
            category: "Design",
            title: "Landcape Design",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
          {
            src: require("../../assets/images/portfolio/interior/portfolio-8.jpg"),
            category: "Interior",
            title: "Home Interior",
            description:
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit.",
          },
        ],
        // for all works
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,

          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
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
                initialSlide: 1,
              },
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        },
      };
    },
  };
</script>
