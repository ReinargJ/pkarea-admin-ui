import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Tables from "./views/Tables.vue";
import Login from "./views/Login.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/edit",
    name: "Gestions des pks",
    component: Tables,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
