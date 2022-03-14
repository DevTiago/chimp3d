<template>
  <v-row class="service-main-wrapper">
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
          desc: `Impressão 3D ao alcance de todos. Para empresas e Hobistas.`,
        },
        {
          icon: "layers",
          title: "Modelação 3D",
          desc: `Tens uma ideia ou necessidade? Uma peça para imprimir? Nos fazemos o desenho.`,
        },
        {
          icon: "cpu",
          title: "Eletrónica",
          desc: `Juntamos a impressão 3D a projetos Maker. Desenvolvemos soluções: Arduino, Bluetooth, automação, Wifi, teclados, displays, RFID e led's`,
        },
        {
          icon: "star",
          title: "Merchandising",
          desc: `Porta-chaves, Brindes, emblemas, logótipos e "name tags"`,
        },
        {
          icon: "package",
          title: "Consumíveis",
          desc: `Filamento, PLA, PTEG, ABS, Spare parts. Visita a nossa loja`,
        },
        {
          icon: "aperture",
          title: "Quem nos procura?",
          desc: `RC, Airsoft, Auto, Moto, Aquariofilia, Home, Indústria, etc.`,
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
