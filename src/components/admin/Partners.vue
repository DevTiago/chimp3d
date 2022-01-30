<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Imagem</th>
            <th class="text-center">
              <i class="fas fa-edit"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="partner in partners" :key="partner.name">
            <td>{{ partner.name }}</td>
            <th class="text-left">{{ partner.isActive ? "Sim" : "Não" }}</th>
            <td class="text--darken-1" style="height: 130px; width: 130px">
              <img :src="partner.imageUrl" alt="" />
            </td>
            <td class="text-center">
              <v-btn color="primary" dark> Editar</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row class="mt-2 ml-1">
      <v-dialog v-model="newPartnerModal" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark v-on="on"> Adicionar novo </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Novo Parceiro</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome"
                    class="p-2"
                    required
                    v-model="newPartner.name"
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
            <v-btn color="blue darken-1" text @click="newPartnerModal = false">
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
      partners: [],
      newPartner: {
        name: "",
        image: "",
        image_url: "",
      },
      newPartnerModal: false,
    };
  },

  async mounted() {
    console.log("montado");
    const doc = await db.collection("partners").get();

    doc.forEach((doc) => {
      this.partners.push(doc.data());
    });
  },

  methods: {
    async uploadImage() {
      const storageRef = firebase
        .storage()
        .ref("partners/" + this.newStoreItemModal.name)
        .put(this.newPartner.image);

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
        .collection("partners")
        .add({
          name: this.newPartner.name,
          description: this.newPartner.description,
          price: this.newPartner.price,
          category: this.newPartner.category,
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
