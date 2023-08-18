<template>
  <div class="text p-8px border-box rounded">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { textProps } from "./props";

export default defineComponent({
  name: "Text",
  props: textProps,
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
});
</script>

<style scoped>
.text:hover {
  box-shadow: 0 0 10px var(--shadow);
}
</style>
