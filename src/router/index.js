import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Units from "../pages/Units.vue";
import UnitDetail from "../pages/UnitDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/units",
    name: "Units",
    component: Units,
  },
  {
    path: "/units/:id",
    name: "UnitDetail",
    component: UnitDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
