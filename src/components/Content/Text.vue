<template>
  <div class="text p-8px box-border rounded transition duration-500">
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
  cursor: pointer;
  box-shadow: 0 0 0 2px var(--shadow), 0 0 0 1px var(--shadow-secondary);
}
</style>
