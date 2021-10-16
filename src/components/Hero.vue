<template>
  <div id="hero-component">
    <img src="../assets/hero2.jpg" alt="" />
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
  width: 100%;
  height: 98vh;
}

img {
  position: absolute;
  width: 100%;
  max-height: 100%;
  display: block;
  transform: scaleX(-1);
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
</style>
