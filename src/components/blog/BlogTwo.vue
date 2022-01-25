<template>
  <v-row>
    <v-col cols="12">
      <div class="slick-space-gutter--15 slickdot--20">
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        blogContent: [
          {
            src: require("../../assets/images/blog/blog-01.jpg"),
            title: "What is the Difference between Web and Brand.",
            category: "App Development",
          },
          {
            src: require("../../assets/images/blog/blog-02.jpg"),
            title: "A big ticket gone to be an interesting look New York.",
            category: "React App",
          },
          {
            src: require("../../assets/images/blog/blog-03.jpg"),
            title: "Getting tickets to the big show have a closer look.",
            category: "Photoshop",
          },
          {
            src: require("../../assets/images/blog/blog-04.jpg"),
            title: "What is the Difference between Web and Brand.",
            category: "App Development",
          },
          {
            src: require("../../assets/images/blog/blog-05.jpg"),
            title: "A big ticket gone to be an interesting look New York.",
            category: "React App",
          },
          {
            src: require("../../assets/images/blog/blog-06.jpg"),
            title: "Getting tickets to the big show have a closer look.",
            category: "Photoshop",
          },
        ],
        // for all works
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
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
