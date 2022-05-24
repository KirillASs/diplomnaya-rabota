import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import ContactUs from "@/pages/ContactUs.vue";

const routes = [
  {
    path: "/main",
    component: MainPage,
    alias: "/",
  },
  {
    path: "/contact",
    component: ContactUs,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
