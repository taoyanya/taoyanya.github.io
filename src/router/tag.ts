import { RouteRecordRaw } from "vue-router";

export const tagRoutes: RouteRecordRaw[] = [
  {
    path: "/tag",
    name: "Tag",
    component: () => import("@/pages/tag/Tag.vue"),
    meta: {
      nav: "标签",
    },
    children: [
      {
        path: "/tag",
        redirect: "/tagBoard",
      },
      {
        path: "/tagBoard",
        name: "TagBoard",
        component: () => import("@/pages/tag/views/TagBoard.vue"),
      },
      {
        path: "/tagDetail",
        name: "TagDetail",
        component: () => import("@/pages/tag/views/TagDetail.vue"),
      },
    ],
  },
];
