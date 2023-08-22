<template>
  <div
    class="content flex justify-center items-center p-10px pt-20px box-border"
  >
    <media-container>
      <connection :color="color" />
      <div class="mt-20px">
        <education :color="color" />
      </div>
      <div class="mt-20px">
        <projects :color="color" />
      </div>
      <div class="mt-20px">
        <experience :color="color" />
      </div>
      <div class="mt-20px">
        <award :color="color" />
      </div>
    </media-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { props } from "./props";
import MediaContainer from "../MediaContainer";
import Education from "./Education.vue";
import Projects from "./Project.vue";
import Connection from "./Connection.vue";
import Experience from "./Experience.vue";
import Award from "./Award.vue";

export default defineComponent({
  name: "Content",
  props,
  components: {
    MediaContainer,
    Education,
    Projects,
    Connection,
    Experience,
    Award,
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
});
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .content {
    background-color: var(--dark-mode);
    color: var(--light-mode);
  }
}

@media (prefers-color-scheme: light) {
  .content {
    background-color: #fff;
  }
}
</style>
