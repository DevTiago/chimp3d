<template>
  <div class="active-dark bg_color--10">
    <Header>
      <img alt="logo" slot="logo" :src="logo" />
    </Header>

    <div class="content">
      <div class="row product-listing d-flex flex-wrap">
        <div
          class="col-3 col-lg-4 col-xl-3 filters white--text font-weight-bold"
        >
          <!--  <h4>Categorias</h4> -->
          <v-checkbox
            v-for="(category, index) in this.categories"
            :value="category.name"
            v-model="selectedCategories"
            v-bind:key="index"
          >
            <template v-slot:label>
              <span class="checkboxLabel">{{ category.name }}</span>
            </template>
          </v-checkbox>
        </div>

        <div
          class="
            row
            col-9 col-lg-8 col-xl-9
            products
            white--text
            font-weight-bold
          "
        >
          <p
            v-if="filteredProducts && filteredProducts.length == 0"
            class="white--text m-auto"
          >
            Sem produtos disponíveis
          </p>
          <v-card
            v-else
            v-for="product in filteredProducts"
            v-bind:key="product.id"
            class="card"
            style="padding: 0"
          >
            <v-img
              style="margin: auto; height: 50%"
              :src="product.imageUrl"
            ></v-img>

            <div class="card-description">
              <v-card-title>{{ product.name }}</v-card-title>

              <v-card-text>
                <div>{{ product.description }}</div>
                <div>{{ product.price }}€</div>
              </v-card-text>
            </div>
          </v-card>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { db } from "@/main";

export default {
  name: "Shop",
  components: {
    Header,
    Footer,
  },

  async beforeMount() {
    const categoriesDoc = await db.collection("storeCategories").get();
    const productsDoc = await db
      .collection("store")
      .where("isActive", "==", true)
      .get();

    categoriesDoc.forEach((doc) => {
      this.categories.push(doc.data());
    });

    productsDoc.forEach((doc) => {
      this.products.push(doc.data());
    });
  },

  data() {
    return {
      products: [],
      categories: [],
      selectedCategories: [],
      logo: require("../assets/images/logo/logo.png"),
    };
  },

  computed: {
    filteredProducts() {
      let filteredProducts = [];

      if (this.selectedCategories.length == 0) {
        return this.products;
      } else {
        filteredProducts = this.products.filter((product) => {
          return this.selectedCategories.includes(product.category);
        });

        return filteredProducts;
      }
    },
  },
};
</script>

<style>
.product-listing {
  padding: 140px 30px 0px 30px;
}

.filters {
  width: auto;
  height: 300px;
  padding: 10px;
}

.products {
  padding: 10px;
  width: auto;
  height: 100%;
}

.checkboxLabel {
  color: #fff;
}

.theme--light.v-icon {
  color: #fff;
}

.v-input {
  margin-top: 0 !important;
}

.v-messages {
  display: none;
}

.v-card__title {
  font-size: 12px !important;
  padding: 5px 15px !important;
}

.card {
  width: 200px;
  margin: 5px;
}

.card image {
  height: 50% !important;
}

.card-description {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
