<template>
  <v-row>
    <!-- Start Single Team Area  -->
    <v-col
      lg="3"
      md="6"
      sm="6"
      cols="12"
      v-for="item in storeToDisplay"
      :key="item.id"
      class="itemContainer"
    >
      <div class="team team-style--bottom">
        <div class="thumbnail">
          <img :src="item.imageUrl" alt="Team Images" />
        </div>
        <div class="content">
          <h4 class="heading-title">{{ item.name }}</h4>
          <p class="designation">{{ item.description }}</p>
          <p class="designation">{{ item.price }} €</p>
        </div>
      </div>
    </v-col>
    <!-- End Single Team Area  -->
  </v-row>
</template>

<script>
import { db } from "@/main";

export default {
  components: {},

  async beforeMount() {
    const doc = await db.collection("store").get();

    doc.forEach((doc) => {
      this.store.push(doc.data());
    });

    const shuffled = this.store.sort(() => 0.5 - Math.random());

    this.storeToDisplay = shuffled.slice(0, 4);
  },

  data() {
    return {
      store: [],
      storeToDisplay: [],
    };
  },
};
</script>

<style scoped lang="css">
.itemContainer {
  display: flex;
  align-items: center;
}

.team .content {
  padding: 15px 20px;
}
</style>
