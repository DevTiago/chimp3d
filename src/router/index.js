import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
// import Missing from '../views/404.vue'
// import Demo from '../views/Demo.vue'
import Home from "../views/Home";
import Admin from "../views/Admin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Chimp3d - A tua loja 3D!",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      title: "Chimp3d Admin",
    },
  },

  // {
  //     path: '/about',
  //     name: 'About',
  //     meta: {
  //         title: 'About - VueJS Creative Agency and Portfolio Template'
  //     },
  //     component: () =>
  //         import ('../views/About.vue')
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
