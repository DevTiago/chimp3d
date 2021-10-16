<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Services />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Services,
    Projects,
  },
};
</script>
pt>

<style lang="scss">
@font-face {
  font-family: "Josefin";
  src: local("Josefin"), url(./fonts/Josefin/JosefinSans-VariableFont_wght.ttf);
}

#app {
  font-family: "Josefin", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
