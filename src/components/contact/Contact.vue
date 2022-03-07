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
        <v-form ref="form" lazy-validation>
          <v-text-field
              class="theme--dark custom-label-color"
              v-model="name"
              label="Nome"
              required>
          </v-text-field>

          <v-text-field
              v-model="email"
              class="theme--dark custom-label-color"
              label="E-mail"
              required
          ></v-text-field>

          <v-textarea
              class="theme--dark custom-label-color"
              label="A sua mensagem:"
              v-model="message"
              auto-grow
              clearable
              rows="3"
              value=""
          ></v-textarea>

          <p class="white--text" style="font-size: 14px"><small>Ao enviar mensagem está a concordar com a partilha dos seu dados com a Chimp3d</small></p>

          <v-btn color="success" class="mr-4" @click="onSubmit"> Enviar</v-btn>
          
        </v-form>
      </div>
    </div>
  </v-row>
</template>

<script>
import emailjs from '@emailjs/browser';


export default {
  components: {},
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
        error: "",
        success: ""
      },
    };
  },
  methods: {
    onSubmit() {
      let templateParams = {
        from_name: this.name,
        from_email: this.email,
        from_message: this.message
      };

      try {
        emailjs.send('service_z5g6c9c', 'template_r37bz1f', templateParams, 'Kek1iJ6_ybUDku0-6');
      } catch (e) {
          this.error = "Não foi possível enviar a sua mensagem, por favor tente mais tarde ou contacte-nos através do +351 963241458 ou por email para 3dshop@sapo.pt"
      }



    },
  },
};
</script>

<style>
.form-wrapper label input,
.form-wrapper label textarea {
  margin-bottom: 0;
}

.form-wrapper label {
  margin-bottom: 20px;
}


.v-input__slot {
  align-items: unset !important;
}

.custom-label-color .v-label {
  color: #fff
}

</style>
