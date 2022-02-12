<template>
  <div>
    <v-row class="mb-3 ml-1">
      <v-dialog v-model="newItemModal" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark v-on="on"> Adicionar novo </v-btn>
        </template>


        <v-card>
          <v-card-title>
            <span class="text-h5">Novo trabalho</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Título"
                    class="p-2"
                    required
                    v-model="newItem.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Descrição"
                    hint="Descriçao do trabalho"
                    v-model="newItem.description"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    chips
                    small-chips
                    truncate-length="15"
                    accept="image/*"
                    v-model="newItem.image"
                  >
                    >
                  </v-file-input>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    @click="newItemModal = false">
                  Fechar
                </v-btn>
                <v-btn color="success" @click="saveWork">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>


      </v-dialog>
    </v-row>
    <v-spacer></v-spacer>

    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Descrição</th>
            <th class="text-left">Imagem</th>
            <th class="text-center">
              <i class="fas fa-edit"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in portfolioItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="text--darken-1">{{ item.description }}</td>
            <td class="text--darken-1" style="height: 80px; width: 60px">
              <img :src="item.imageUrl" alt="" />
            </td>
            <td class="text-center">
              <v-btn color="primary" dark> Editar</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { db } from "@/main";
import firebase from "firebase";

export default {
  components: {},
  data() {
    return {
      newItem: {
        name: "",
        description: "",
        image: "",
        image_url: "",
      },
      newItemModal: false,
      portfolioItems: [],
    };
  },

  async mounted() {
    const doc = await db.collection("portfolio").get();
    doc.forEach((doc) => {
      this.portfolioItems.push(doc.data());
    });
  },

  methods: {
    previewImage() {
      this.newItem.image = event.target.files[0];
    },

    async uploadImage() {
      const storageRef = firebase
        .storage()
        .ref("portfolioImages/" + this.newItem.name)
        .put(this.newItem.image);

      await storageRef.on(
        `state_changed`,
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
        .collection("portfolio")
        .add({
          name: this.newItem.name,
          description: this.newItem.description,
          isActive: true,
          imageUrl: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => this.$router.go())
        .catch((e) => console.log(e));
    },

    async saveWork() {
      await this.uploadImage();
    },
  },
};
</script>

<style scoped lang="css">
input {
  border: none !important;
}
</style>
