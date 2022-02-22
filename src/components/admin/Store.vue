<template>
  <div>
    <v-row class="mb-3 ml-1">
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
                    v-model="newItem.image"
                  >
                    >
                  </v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="newStoreItemModal = false">
              Fechar
            </v-btn>
            <v-btn color="success" @click="saveWork"> Guardar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="editItemModal" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Artigo</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome"
                    class="p-2"
                    required
                    v-model="editItem.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Descrição"
                    class="p-2"
                    required
                    v-model="editItem.description"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Preço"
                    class="p-2"
                    required
                    v-model="editItem.price"
                  ></v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12">
                  <v-select
                    :items="storeCategories"
                    v-model="editItem.category"
                    label="Categoria"
                  ></v-select>
                </v-col>

                <v-col cols="12" class="my-5">
                  <v-img
                    :src="editItem.image_url"
                    max-height="150"
                    max-width="250"
                  ></v-img>
                </v-col>

                <v-col cols="12">
                  <v-checkbox
                    v-model="editItem.isActive"
                    :label="`Mostrar no site?`"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error darken-1" @click="editItemModal = false">
              Fechar
            </v-btn>
            <v-btn color="success darken-1" @click="saveItemChanged">
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
                    Esta operação é irreversível. Pretende apagar este artigo da
                    loja?
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
            <v-btn color="success darken-1" @click="deleteItem">Sim</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Descrição</th>
            <th class="text-center">Categoria</th>
            <th class="text-center">Preço</th>
            <th class="text-center">Disponivel?</th>
            <th class="text-center">Imagem</th>
            <th class="text-center">
              <i class="fas fa-edit"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in storeItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td class="text--darken-1">{{ item.description }}</td>
            <th class="text-center">{{ item.category }}</th>
            <th class="text-center">{{ item.price }}</th>
            <th class="text-center">{{ item.isActive ? "Sim" : "Não" }}</th>
            <td class="text--darken-1" style="height: 60px; width: 60px">
              <img :src="item.imageUrl" alt="" />
            </td>
            <td class="text-center">
              <v-btn color="primary" dark @click="itemEdit(item)">
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
      storeItems: [],
      newItem: {
        name: "",
        description: "",
        price: 0.0,
        category: "",
        image: "",
        image_url: "",
      },

      editItem: {
        id: "",
        name: "",
        description: "",
        price: 0,
        category: "",
        isActive: false,
      },
      editItemModal: false,
      newStoreItemModal: false,
      storeCategories: [],
      deleteItemId: "",
      confirmationModal: false,
    };
  },

  async mounted() {
    const doc = await db
        .collection("store")
        .get();

    doc.forEach((doc) => {
      this.storeItems.push(doc.data());
    });

    const docStoreCategories = await db.collection("storeCategories").get();

    docStoreCategories.forEach((doc) => {
      this.storeCategories.push(doc.data().name);
    });
  },

  methods: {
    previewImage() {
      this.newItem.image = event.target.files[0];
    },

    async uploadImage() {
      const storageRef = firebase
        .storage()
        .ref("store/" + this.newItem.name)
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
          id: new Date().getTime().toString(),
          name: this.newItem.name,
          description: this.newItem.description,
          price: this.newItem.price,
          category: this.newItem.category,
          imageUrl: url,
          isActive: true,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => this.$router.go());
    },

    async saveWork() {
      await this.uploadImage();
    },

    async itemEdit(item) {
      this.editItem.id = item.id;
      this.editItem.name = item.name;
      this.editItem.description = item.description;
      this.editItem.price = item.price;
      this.editItem.category = item.category;
      this.editItem.isActive = item.isActive;

      this.editItemModal = true;
    },

    async saveItemChanged() {
      let doc = await db
        .collection("store")
        .where("id", "==", this.editItem.id)
        .get();

      await db
        .collection("store")
        .doc(doc.docs[0].id)
        .update({
          name: this.editItem.name,
          description: this.editItem.description,
          price: this.editItem.price,
          category: this.editItem.category,
          isActive: this.editItem.isActive,
        })
        .then(() => this.$router.go())
        .catch((e) => console.log(e));
    },

    async deleteItem() {
      let doc = await db
        .collection("store")
        .where("id", "==", this.editItem.id)
        .get();

      await db
        .collection("store")
        .doc(doc.docs[0].id)
        .delete()
        .then(() => {
          this.deleteItemId = "";
          this.$router.go();
        });
    },
  },
};
</script>

<style scoped lang="css"></style>
