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
          <td class="text-center" @click="checkCategory(category.name)">
            <i class="fas fa-trash" style="color: red; cursor: pointer"></i>
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <v-dialog v-model="confirmationModal" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h3 class="text-h5">Atenção</h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="p-0">
                <p>Esta categoria tem produtos associados. Pretende avançar?</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" @click="closeModal">Não</v-btn>
          <v-btn color="success darken-1">Sim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      confirmationModal: false,
      deleteCategoryId: "",
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
    closeModal() {
      this.confirmationModal = false;
      this.deleteCategoryId = "";
    },

    async saveNewCategory() {
      if (this.newCategoryName === "") {
        return;
      } else {
        await db
          .collection("storeCategories")
          .add({
            name: this.newCategoryName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => this.$router.go())
          .catch((e) => console.log(e));
      }
    },

    async checkCategory(name) {
      let doc = await db
        .collection("storeCategories")
        .where("name", "==", name)
        .get();

      this.deleteCategoryId = doc.docs[0].id;

      let elements = await this.checkIfCategoryHasProducts(name);

      if (elements > 0) {
        this.confirmationModal = true;
      } else {
        this.deleteCategory(this.deleteCategoryId);
      }
    },

    async deleteCategory(id) {
      await db
        .collection("storeCategories")
        .doc(id)
        .delete()
        .then(() => {
          this.deleteCategoryId = "";
          this.$router.go();
        });
    },

    async checkIfCategoryHasProducts(name) {
      let doc = await db
        .collection("store")
        .where("category", "==", name)
        .get();

      return doc.docs.length;
    },
  },
};
</script>

<style scoped lang="css"></style>
