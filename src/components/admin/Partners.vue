<template>
  <div>
    <v-row class="mb-3 ml-1">
      <v-dialog v-model="newPartnerModal" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark v-on="on"> Adicionar novo</v-btn>
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
                    type="file"
                    accept="image/*"
                    v-model="newPartner.image"
                    @change="previewImage"
                  >
                    >
                  </v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" @click="newPartnerModal = false">
              Fechar
            </v-btn>
            <v-btn color="success darken-1" @click="saveWork"> Guardar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="editPartnerModal" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Parceiro</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome"
                    class="p-2"
                    required
                    v-model="editPartner.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="my-5">
                  <v-img
                    :src="editPartner.image_url"
                    max-height="150"
                    max-width="250"
                  ></v-img>
                </v-col>

                <v-col cols="12">
                  <v-checkbox
                    v-model="editPartner.isActive"
                    :label="`Mostrar no site?`"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error darken-1" @click="editPartnerModal = false">
              Fechar
            </v-btn>
            <v-btn color="success darken-1" @click="savePartnerChanged">
              Guardar
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="warning darken-1" @click="deletePartner">
              Apagar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Mostrar?</th>
            <th class="text-center">Imagem</th>
            <th class="text-center">
              <i class="fas fa-edit"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="partner in partners" :key="partner.id">
            <td>{{ partner.name }}</td>
            <th class="text-left">{{ partner.isActive ? "Sim" : "Não" }}</th>
            <td
              class="text--darken-1 text-center"
              style="height: 60px; width: 60px"
            >
              <img :src="partner.imageUrl" alt="" />
            </td>
            <td class="text-center">
              <v-btn color="primary" dark @click="partnerEdit(partner)">
                Editar</v-btn
              >
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
      partners: [],
      newPartner: {
        name: "",
        image: "",
        image_url: "",
      },
      editPartner: {
        id: "",
        name: "",
        image: "",
        isActive: "",
        image_url: "",
      },
      newPartnerModal: false,
      editPartnerModal: false,
    };
  },

  async mounted() {
    const doc = await db.collection("partners").get();

    doc.forEach((doc) => {
      this.partners.push(doc.data());
    });
  },

  methods: {
    previewImage(event, img) {
      this.imageData = event.target.files[0];
    },

    async partnerEdit(partner) {
      this.editPartner.id = partner.id;
      this.editPartner.name = partner.name;
      this.editPartner.isActive = partner.isActive;
      this.editPartner.image_url = partner.imageUrl;

      this.editPartnerModal = true;
    },

    async uploadImage() {
      const storageRef = firebase
        .storage()
        .ref("partners/" + this.newPartner.name)
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
          id: new Date().getTime().toString(),
          name: this.newPartner.name,
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

    async savePartnerChanged() {
      let doc = await db
        .collection("partners")
        .where("id", "==", this.editPartner.id)
        .get();

      await db
        .collection("partners")
        .doc(doc.docs[0].id)
        .update({
          name: this.editPartner.name,
          isActive: this.editPartner.isActive,
        })
        .then(() => this.$router.go())
        .catch((e) => console.log(e));
    },

    async deletePartner() {
      let doc = await db
        .collection("partners")
        .where("id", "==", this.editPartner.id)
        .get();

      await db
        .collection("partners")
        .doc(doc.docs[0].id)
        .delete()
        .then(() => this.$router.go());
    },
  },
};
</script>

<style scoped lang="css"></style>
