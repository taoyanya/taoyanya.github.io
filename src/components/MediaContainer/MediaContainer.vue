<template>
  <div class="media-container w-3/5">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MediaContainer",
  setup() {},
});
</script>

<style scoped>
  @media screen and (max-width: 600px) {
  .media-container {
    width: 98%;
  }
}

@media screen and (min-width: 800px) {
  .media-container {
    width: 60%;
  }
}
</style>
