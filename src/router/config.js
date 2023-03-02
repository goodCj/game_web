import { lazy } from "react";

const Main = lazy(() => import("../pages/main"));
const Detail = lazy(() => import("../pages/detail"));
const Game = lazy(() => import("../pages/game"));
const Privacy = lazy(() => import("../pages/pdf/privacy"));
const Termofuse = lazy(() => import("../pages/pdf/termofuse"));

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
  {
    path: "/privacy",
    component: Privacy,
  },
  {
    path: "/termofuse",
    component: Termofuse,
  },
];

export default routes;
