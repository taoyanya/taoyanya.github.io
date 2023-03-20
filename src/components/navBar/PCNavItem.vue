<template>
  <div class="center~ ml-10px pointer~" @click="navigate(url)">
    <div :class="[icon]"></div>
    <div class="ml-5px">{{ name }}</div>
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
  name: "PCNavItem",
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
