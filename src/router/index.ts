import { useNav } from "@/hooks/use-nav";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { tagRoutes } from "./tag";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/Home.vue"),
    meta: {
      nav: "RRR",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/about/About.vue"),
    meta: {
      nav: "关于",
    },
  },
  {
    path: "/record",
    name: "Record",
    component: () => import("@/pages/record/Record.vue"),
    meta: {
      nav: "归档",
    },
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("@/pages/article/Article.vue"),
    meta: {
      nav: "文章",
    },
  },
  ...tagRoutes,
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export const { nav, setNav } = useNav("RRR");
router.beforeEach((to) => {
  if (to.query && to.query.tag) {
    setNav(`${to.meta.nav}-${to.query.tag}`);
  } else {
    setNav(to.meta.nav);
  }
});
