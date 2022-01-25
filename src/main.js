import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueParticles from "vue-particles";
import CoolLightBox from "vue-cool-lightbox";
import VueScrollactive from "vue-scrollactive";
import VueCarousel from 'vue-carousel';

import axios from "axios";
import 'firebase/auth';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import "./assets/scss/main.scss";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(CoolLightBox);
Vue.use(VueScrollactive);
Vue.use(VueCarousel);


const firebaseConfig = {
    apiKey: "AIzaSyCmNOKOFs0Yh5NZjseUooZVCgt6klWofuQ",
    authDomain: "chimp3d-f2542.firebaseapp.com",
    projectId: "chimp3d-f2542",
    storageBucket: "chimp3d-f2542.appspot.com",
    messagingSenderId: "1073288211893",
    appId: "1:1073288211893:web:0f9a26cecd0c8bf7bdfdfc",
    measurementId: "G-EMWE6C90D7",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

let app;

firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            router,
            vuetify,
            render: (h) => h(App),
        }).$mount("#app");
    }
})


