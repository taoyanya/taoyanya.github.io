<template>
  <div
    class="flex items-center text-base mr-8px mt-5px pointer~"
    @click="navigate(url)"
  >
    <div :class="[icon]"></div>
    <div class="ml-5px text-sm">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { router } from "@/router";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  name: "MobileNavItem",
  setup(props) {
    function navigate(url: string) {
      router.push(url);
    }
    return {
      navigate,
      ...toRefs(props),
    };
  },
});
</script>
