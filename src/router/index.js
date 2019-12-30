import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Register";
import About from "../views/About.vue";
import MainData from "../components/Main/MainData";
import Dashboard from "../components/Dashboard/Dashboard";
import IndexAuth from "../components/Auth/IndexAuth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/about",
        name: "about",
        component: About
      },
      {
        path: "/data/:data_id",
        component: MainData
      },
      {
        path: "/auth",
        component: IndexAuth,
        children: [
          {
            path: "/auth/login",
            component: Login
          },
          {
            path: "/auth/signup",
            component: Signup
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
