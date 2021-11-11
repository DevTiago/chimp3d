import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
// import Missing from '../views/404.vue'
// import Demo from '../views/Demo.vue'
import Home from "../views/Home";
import Admin from "../views/Admin";
import Login from "../views/Login";
import firebase from 'firebase/app';

import Portfolio from '../components/admin/Portfolio'
import Partners from '../components/admin/Partners'
import Store from '../components/admin/Store'

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
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Chimp3d Admin",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      title: "Chimp3d Admin",
      requiresAuth: true
    },
    children: [
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'store',
        name: 'Store',
        component: Store
      },
      {
        path: 'partners',
        name: 'Partners',
        component: Partners
      },
    ]
  },
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
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else if(isAuthenticated && to.name === 'login') {
    next('/admin');
  } else {
    next();
  }


});

export default router;
