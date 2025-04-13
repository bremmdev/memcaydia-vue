import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import MainLayout from "@/layout/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "index",
          component: IndexView,
        },
        {
          path: "/games/:slug",
          name: "game",
          component: () => import("../views/GameView.vue"),
        },
        {
          path: "/highscores",
          name: "highscores",
          // route level code-splitting, creates separate chunks and is lazy-loaded
          component: () => import("../views/HighscoreView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("../views/NotFoundView.vue"),
        },
      ],
    },
  ],
});

export default router;
