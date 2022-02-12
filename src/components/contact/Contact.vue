<template>
  <v-row class="w-100">
    <div style="padding-top: 150px; margin: auto">
      <div class="text-center section-title mb--50">
        <span class="subtitle text-center">Estamos ao seu dispor</span>
        <h2 class="heading-title">Contacto</h2>
        <div class="im_address">
          <span>Podes contactar-nos directamente para o:</span
          ><a class="link im-hover" href="tel:+351963241458">+351 963241458</a>
        </div>
        <div class="im_address mt--5">
          <span>ou pelo email:</span
          ><a class="link im-hover" href="mailto:3dshop@sapo.pt"
            >3dshop@sapo.pt</a
          >
        </div>
      </div>
      <div class="form-wrapper">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            class="theme--dark"
            v-model="name"
            label="Nome"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="email"
            class="theme--dark"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            class="theme--dark"
            name="input-2-1"
            label="A sua mensagem:"
            auto-grow
            clearable
            clear-icon="mdi-close-circle"
            rows="3"
            value=""
          ></v-textarea>

          <v-checkbox
            v-model="checkbox"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn color="success" class="mr-4"> Enviar </v-btn>
        </v-form>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss">
.form-wrapper label input,
.form-wrapper label textarea {
  margin-bottom: 0;
}
.form-wrapper label {
  margin-bottom: 20px;
}

//.theme--light.v-label {
//  color: #f4f4f4 !important;
//}

.v-input__slot {
  align-items: unset !important;
}

//.theme--light.v-icon {
//  color: #f4f4f4;
//}
</style>
