<template>
  <div>
    <v-row class="mb-3 ml-1">
      <v-dialog v-model="newPortfolioModal" persistent max-width="600px">
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
                    label="Nome"
                    class="p-2"
                    required
                    v-model="newPortfolio.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Descrição"
                    hint="Descriçao do trabalho"
                    v-model="newPortfolio.description"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    chips
                    small-chips
                    truncate-length="15"
                    type="file"
                    accept="image/*"
                    v-model="newPortfolio.image"
                  >
                    >
                  </v-file-input>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="newPortfolioModal = false">
                  Fechar
                </v-btn>
                <v-btn color="success" @click="saveWork"> Guardar </v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="editPortfolioModal" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Trabalho</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome"
                    class="p-2"
                    required
                    v-model="editPortfolio.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Description"
                    class="p-2"
                    required
                    v-model="editPortfolio.description"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="my-5">
                  <v-img
                    :src="editPortfolio.image_url"
                    max-height="150"
                    max-width="250"
                  ></v-img>
                </v-col>

                <v-col cols="12">
                  <v-checkbox
                    v-model="editPortfolio.isActive"
                    :label="`Mostrar no site?`"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error darken-1" @click="editPortfolioModal = false">
              Fechar
            </v-btn>
            <v-btn color="success darken-1" @click="savePortfolioChanged">
              Guardar
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="warning darken-1" @click="confirmationModal = true">
              Apagar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="confirmationModal" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <h3 class="text-h5">Tem a certeza?</h3>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="p-0">
                  <p>
                    Esta operação é irreversível. Pretende apagar este trabalho
                    do Portfólio?
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" @click="confirmationModal = false"
              >Não</v-btn
            >
            <v-btn color="success darken-1" @click="deletePortfolio">Sim</v-btn>
          </v-card-actions>
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
            <th class="text-center">Mostrar?</th>
            <th class="text-center">
              <i class="fas fa-edit"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in portfolioItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td class="text--darken-1">{{ item.description }}</td>
            <td class="text--darken-1" style="height: 80px; width: 60px">
              <img :src="item.imageUrl" alt="" />
            </td>
            <td class="text-center">
              <span v-if="item.isActive">Sim</span>
              <span v-else>Não</span>
            </td>
            <td class="text-center">
              <v-btn color="primary" dark @click="portfolioEdit(item)">
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
      newPortfolio: {
        name: "",
        description: "",
        image: "",
        image_url: "",
      },

      editPortfolio: {
        id: "",
        name: "",
        description: "",
        image_url: "",
      },

      newPortfolioModal: false,
      editPortfolioModal: false,
      confirmationModal: false,
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
      this.newPortfolio.image = event.target.files[0];
    },

    async uploadImage() {
      const storageRef = firebase
        .storage()
        .ref("portfolioImages/" + this.newPortfolio.name)
        .put(this.newPortfolio.image);

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
          id: new Date().getTime().toString(),
          name: this.newPortfolio.name,
          description: this.newPortfolio.description,
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

    async savePortfolioChanged() {
      let doc = await db
        .collection("portfolio")
        .where("id", "==", this.editPortfolio.id)
        .get();

      await db
        .collection("portfolio")
        .doc(doc.docs[0].id)
        .update({
          name: this.editPortfolio.name,
          description: this.editPortfolio.description,
          isActive: this.editPortfolio.isActive,
        })
        .then(() => this.$router.go())
        .catch((e) => console.log(e));
    },

    async portfolioEdit(item) {
      this.editPortfolio.id = item.id;
      this.editPortfolio.name = item.name;
      this.editPortfolio.description = item.description;
      this.editPortfolio.image_url = item.imageUrl;
      this.editPortfolio.isActive = item.isActive;

      this.editPortfolioModal = true;
    },

    async deletePortfolio() {
      let doc = await db
        .collection("portfolio")
        .where("id", "==", this.editPortfolio.id)
        .get();

      await db
        .collection("portfolio")
        .doc(doc.docs[0].id)
        .delete()
        .then(() => {
          this.deletePortfolioId = "";
          this.$router.go();
        });
    },
  },
};
</script>

<style scoped lang="css">
input {
  border: none !important;
}
</style>
