<template>
  <div class="w-full h-full between~ px-20px box-border">
    <div>RRR</div>
    <div
      class="i-carbon-menu text-base pointer~"
      @click="drawerShow = true"
    ></div>
    <n-drawer width="60%" v-model:show="drawerShow">
      <n-drawer-content>
        <mobile-nav-item icon="i-carbon-home" name="首页" url="/" />
        <mobile-nav-item icon="i-carbon-tag-group" name="标签" url="/tag" />
        <mobile-nav-item icon="i-carbon-box" name="归档" url="/record" />
        <mobile-nav-item icon="i-carbon-help" name="关于" url="/about" />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";
import MobileNavItem from "./MobileNavItem.vue";
import { router } from "@/router";

export default defineComponent({
  name: "MobileNavBar",
  components: { NDrawer, NDrawerContent, MobileNavItem },
  setup() {
    const drawerShow = ref(false);
    function navigate(url: string) {
      router.push(url);
    }

    return {
      navigate,
      drawerShow,
    };
  },
});
</script>
