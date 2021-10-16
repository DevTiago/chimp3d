<template>
  <div id="projects">
    <div class="container">
      <h2>Projetos</h2>
      <div class="row justify-content-center">
        <div class="card p-0" style="width: 18rem;">
          <img
            class="card-img-top img-fluid"
            src="../assets/project1.png"
            alt="Card image cap"
          />
        </div>

        <div class="card p-0" style="width: 18rem;">
          <img
            class="card-img-top img-fluid"
            src="../assets/project2.png"
            alt="Card image cap"
          />
        </div>

        <div class="card p-0" style="width: 18rem;">
          <img
            class="card-img-top img-fluid"
            src="../assets/project3.png"
            alt="Card image cap"
          />
        </div>

        <div class="card p-0" style="width: 18rem;">
          <img
            class="card-img-top img-fluid"
            src="../assets/project4.png"
            alt="Card image cap"
          />
        </div>

        <div class="card p-0" style="width: 18rem;">
          <img
            class="card-img-top img-fluid"
            src="../assets/project5.png"
            alt="Card image cap"
          />
        </div>

        <div class="card p-0" style="width: 18rem;">
          <img
            class="card-img-top img-fluid"
            src="../assets/project6.png"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 30px;
  color: #232323;
}

#projects {
  padding: 100px 0;
  background-color: #d3d0cb;
}

.card {
  margin: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
  }
}
</style>
