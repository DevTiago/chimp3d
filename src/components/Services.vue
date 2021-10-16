<template>
  <div id="services">
    <div class="container">
      <h2>Os nossos serviços</h2>
      <div class="row">
        <div class="services-description col-12">
          <p>
            Ajudamos artistas, marcas, estúdios, engenheiros e arquitetos a
            transformar as suas ideias em realidade. <br />
            Desde a consultoria de projeto até a fabricação, nós ajudamo-lo.
          </p>
        </div>
        <div class="services-container mt-4">
          <div class="row">
            <div class="col-12 col-sm-4 col-lg-2">
              <i class="fas fa-cube"></i>Impressão 3D
            </div>
            <div class="col-12 col-sm-4 col-lg-2">
              <i class="fab fa-buromobelexperte"></i>Modelação 3D
            </div>
            <div class="col-12 col-sm-4 col-lg-2">
              <i class="fas fa-atom"></i>Prototipagem
            </div>
            <div class="col-12 col-sm-4 col-lg-2">
              <i class="fas fa-bolt"></i>Eletrónica
            </div>
            <div class="col-12 col-sm-4 col-lg-2">
              <i class="fab fa-product-hunt"></i>Merchandising
            </div>
            <div class="col-12 col-sm-4s col-lg-2">
              <i class="fas fa-tape"></i>Consumíveis
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#services {
  background-color: #232323;
  padding: 100px;
  h2 {
    color: #bbc5aa;
    font-size: 36px;
    font-weight: bold;
    padding: 20px;
  }
}

.services-container {
  color: #bbc5aa;
  i {
    padding: 5px;
  }

  div {
    padding: 10px 0;
    transition: all 0.2s ease-in-out;
  }

  .row {
    div:hover {
      background-color: #fff;
      color: #232323;
      cursor: default;
    }
  }
}

.services-description {
  p {
    color: #bbc5aa;
    font-size: 20px;
  }
}

@media only screen and (max-width: 992px) {
  #services {
    padding: 50px 10px;
    h2 {
      padding: 10px;
      font-size: 24px;
    }
  }

  .services-description {
    p {
      font-size: 18px;
    }
  }
}
</style>
