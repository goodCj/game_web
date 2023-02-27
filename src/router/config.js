import { lazy } from "react";

const Main = lazy(() => import("../pages/main"));
const Detail = lazy(() => import("../pages/detail"));
const Game = lazy(() => import("../pages/game"));

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/game",
    component: Game,
  },
];

export default routes;
