<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Descrição</th>
            <th class="text-left">Categoria</th>
            <th class="text-left">Preço</th>
            <th class="text-left">Disponivel?</th>
            <th class="text-left">Imagem</th>
            <th class="text-center">
              <i class="fas fa-edit"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in storeItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="text--darken-1">{{ item.description }}</td>
            <th class="text-left">{{ item.category }}</th>
            <th class="text-left">{{ item.price }}</th>
            <th class="text-left">{{ item.isActive ? "Sim" : "Não" }}</th>
            <td class="text--darken-1" style="height: 130px; width: 130px">
              <img :src="item.imageUrl" alt="" />
            </td>
            <td class="text-center">
              <v-btn color="primary" dark> Editar</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row class="mt-2 ml-1">
      <v-dialog v-model="newStoreItemModal" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark v-on="on"> Adicionar novo </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Novo artigo</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome"
                    class="p-2"
                    required
                    v-model="newItem.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Descrição"
                    v-model="newItem.description"
                  ></v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12">
                  <v-select
                    :items="storeCategories"
                    v-model="newItem.category"
                    label="Categoria"
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Preço"
                    hint="Preço do artigo"
                    v-model="newItem.price"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    chips
                    small-chips
                    truncate-length="15"
                    @change="previewImage"
                    accept="image/*"
                  >
                    >
                  </v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="newStoreItemModal = false"
            >
              Fechar
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveWork">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { db } from "@/main";
import firebase from "firebase";

export default {
  components: {},
  data() {
    return {
      storeItems: [],
      newItem: {
        name: "",
        description: "",
        price: 0.0,
        category: "",
        image: "",
        image_url: "",
      },
      newStoreItemModal: false,
      storeCategories: ["Consumíveis", "Tintas"],
    };
  },

  async mounted() {
    console.log("montado");
    const doc = await db.collection("store").get();

    doc.forEach((doc) => {
      console.log(doc);
      this.storeItems.push(doc.data());
    });
  },

  methods: {
    async uploadImage() {
      const storageRef = firebase
        .storage()
        .ref("store/" + this.newStoreItemModal.name)
        .put(this.newItem.image);

      await storageRef.on(
        "state_changed",
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.saveToDatabase(url);
          });
        }
      );
    },

    async saveToDatabase(url) {
      await db
        .collection("store")
        .add({
          name: this.newItem.name,
          description: this.newItem.description,
          price: this.newItem.price,
          category: this.newItem.category,
          isActive: true,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => this.$router.go());
    },

    async saveWork() {
      await this.uploadImage();
    },
  },
};
</script>

<style scoped lang="css"></style>
