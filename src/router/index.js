import { createRouter, createWebHistory } from "vue-router";
import telaPri from "../views/telaPri.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cep",
      component: telaPri,
    },
  ],
});

export default router;
