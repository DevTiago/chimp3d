<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-light">
    <div class="container">
      <a
        class="navbar-brand d-flex justify-content-center align-items-center"
        href="#"
      >
        <img
          src="../assets/logo.png"
          alt=""
          width="30"
          height="30"
          class="d-inline-block align-text-top"
        />
        <span style="margin-left: 5px" id="brand-name">Chimp3d</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fal fa-bars fa-sm" style="color: #fff; font-size:28px;"></i>
      </button>

      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto navbar-center mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Serviços</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Projetos</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Componentes</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Acessórios</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contatos</a>
          </li>

          <li class="nav-item">
            <a
              type="button"
              class="nav-link btn btn-success btn-sm rounded-pill ms-lg-3 text-white font"
              href="#"
            >
              <strong>
                Pedir orçamento
              </strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
#brand-name {
  color: white;
}

.navbar-nav * {
  color: #fff !important;
  font-size: 16px;
}

.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.15rem;
}

.navbar-light .navbar-toggler {
  color: #fff !important;
  border-color: #fff !important;
}

.nav-link:hover {
  color: orange !important;
}
</style>
