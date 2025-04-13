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
        }
      ],
    },
  ],
});

export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <IndexPage />,
//         loader: indexRouteLoader,
//         errorElement: <IndexRouteError />,
//       },
//       {
//         path: "/games/:slug",
//         element: <GamePage />,
//         loader: ({ params }) => gameRouteLoader(params.slug),
//       },
//       {
//         path: "/highscores",
//         loader: highscoreRouteLoader,
//         lazy: () => import('./pages/HighscorePage.tsx'),
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);
