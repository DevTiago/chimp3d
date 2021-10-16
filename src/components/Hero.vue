<template>
  <div id="hero-component">
    <div class="main-text container position-relative">
      <h2>
        Chimp3d
      </h2>
      <VScrollin :speed="60">
        A tua loja 3D!
      </VScrollin>
    </div>
  </div>
</template>

<script>
import VScrollin from "vue-scrollin";

export default {
  name: "Hero",
  components: {
    VScrollin,
  },
};
</script>

<style lang="scss" scoped>
#hero-component {
  background-image: url("../assets/geometric.jpg");
  background-size: cover;
}
.main-text {
  padding: 200px 0;
  color: #fff;

  h2 {
    font-size: 122px;
  }

  .v-scrollin {
    font-size: 55px;
  }
}

@media only screen and (max-width: 992px) {
  .main-text {
    padding: 100px 0;

    h2 {
      font-size: 92px;
    }

    .v-scrollin {
      font-size: 23px;
    }
  }
}
</style>
