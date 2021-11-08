<template>
  <v-row>
    <!-- Start Single Team Area  -->
    <v-col
      lg="3"
      md="6"
      sm="6"
      cols="12"
      v-for="team in teamContent"
      :key="team.id"
    >
      <div class="team team-style--bottom">
        <div class="thumbnail">
          <img :src="team.src" alt="Team Images" />
        </div>
        <div class="content">
          <h4 class="heading-title">{{ team.title }}</h4>
          <p class="designation">€ {{ team.price }}</p>
        </div>
      </div>
    </v-col>
    <!-- End Single Team Area  -->
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      teamContent: [
        {
          id: 1,
          src: require("../../assets/images/team/team-01.jpg"),
          title: "Filamento 1",
          price: "10",
        },
        {
          id: 2,
          src: require("../../assets/images/team/team-02.jpg"),
          title: "Consumivel",
          price: "5",
        },
        {
          id: 3,
          src: require("../../assets/images/team/team-03.jpg"),
          title: "Peça",
          price: "19",
        },
        {
          id: 4,
          src: require("../../assets/images/team/team-06.jpg"),
          title: "Filamento 2",
          price: "8",
        },
      ],
    };
  },
};
</script>
