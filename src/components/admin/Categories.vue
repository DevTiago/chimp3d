<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-text-field
          label="Nova categoria"
          class="p-2"
          v-model="newCategoryName"
          required
        ></v-text-field>
      </v-col>
      <v-col col="2">
        <v-btn color="success" @click="saveNewCategory"> Gravar </v-btn>
      </v-col>
    </v-row>

    <v-simple-table dense>
      <thead>
        <tr>
          <th class="text-left">Categoria</th>
          <th class="text-center">
            <i class="fas fa-edit"></i>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(category, i) in storeCategories" :key="i">
          <td>{{ category.name }}</td>
          <td class="text-center">
            <i class="fas fa-trash" style="color: red; cursor: pointer"></i>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import { db } from "@/main";
import firebase from "firebase";

export default {
  data() {
    return {
      storeCategories: [],
      newCategoryName: "",
    };
  },

  async mounted() {
    const doc = await db.collection("storeCategories").get();

    console.log;

    if (doc.docs.length > 0) {
      doc.forEach((doc) => {
        this.storeCategories.push(doc.data());
      });
    }
  },

  methods: {
    async saveNewCategory() {
      await db
        .collection("storeCategories")
        .add({
          name: this.newCategoryName,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => this.$router.go())
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped lang="css"></style>
