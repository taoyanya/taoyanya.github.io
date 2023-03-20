<template>
  <div class="w-full h-full between~ px-100px box-border">
    <div>RRR</div>
    <div class="center~ text-base">
      <p-c-nav-item icon="i-carbon-home" name="首页" url="/" />
      <p-c-nav-item icon="i-carbon-tag-group" name="标签" url="/tag" />
      <p-c-nav-item icon="i-carbon-box" name="归档" url="/record" />
      <p-c-nav-item icon="i-carbon-help" name="关于" url="/about" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { router } from "@/router";
import PCNavItem from "./PCNavItem.vue";

export default defineComponent({
  name: "PCNavBar",
  components: { PCNavItem },
  setup() {
    function navigate(url: string) {
      router.push(url);
    }

    return {
      navigate,
    };
  },
});
</script>
