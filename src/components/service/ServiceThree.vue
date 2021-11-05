<template>
  <v-row class=" service-main-wrapper">
    <!-- Start Single Service  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="service service__style--2 text-left bg-gray">
          <div class="service">
            <div class="icon">
              <div v-html="iconSvg(service.icon)"></div>
            </div>
            <div class="content">
              <h3 class="heading-title">{{ service.title }}</h3>
              <p>
                {{ service.desc }}
              </p>
            </div>
          </div>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </v-row>
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        serviceContent: [
          {
            icon: "printer",
            title: "Impressão 3D",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "layers",
            title: "Modelação 3D",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "aperture",
            title: "Prototipagem",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "cpu",
            title: "Eletrónica",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "star",
            title: "Merchandising",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "package",
            title: "Consumíveis",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
        ],
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
