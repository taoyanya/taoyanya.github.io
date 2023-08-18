<template>
  <div class="title text-3xl relative w-fit">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { titleProps } from "./props";

export default defineComponent({
  name: "Title",
  props: titleProps,
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
});
</script>

<style scoped>
.title::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 12px;
  background: linear-gradient(to right, v-bind(color) 50%, #fff);
  opacity: 0.6;
  bottom: 1px;
  left: 10px;
}
</style>
