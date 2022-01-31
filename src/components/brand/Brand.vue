<template>
  <v-row class="mt--20">
    <v-col cols="12">
      <ul class="brand-style-2">
        <li v-for="(partner, i) in partners" :key="i">
          <img :src="partner.imageUrl" alt="`${partner.name}`" />
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import { db } from "@/main";
export default {
  data() {
    return {
      partners: [],
    };
  },

  async created() {
    const doc = await db.collection("partners").get();
    doc.forEach((doc) => {
      this.partners.push(doc.data());
    });
  },
};
</script>
