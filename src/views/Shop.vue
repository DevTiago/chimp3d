<template>
  <div class="active-dark bg_color--10">
    <Header>
      <img alt="logo" slot="logo" :src="logo"/>
    </Header>


    <div class="container">
      <h2 class="text-center">Bem-vindo á loja da Chimp3d</h2>

    </div>


    <Footer/>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default {
  name: "Shop",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      logo: require("../assets/images/logo/logo.png")
    }
  }
}
</script>

<style scoped>

</style>