import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    meta: {},
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: { requiresAuth: true },
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    meta: { requiresAuth: true },
    component: () => import("../views/ToDo/ToDo.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { requiresAuth: true },
    component: () => import("../views/Chat/Chat.vue"),
  },
  {
    path: "/supply",
    name: "supply",
    meta: { requiresAuth: true },
    component: () => import("../views/Supply/Supply.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    meta: { requiresAuth: true },
    component: () => import("../views/Setting/Setting.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
