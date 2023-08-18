<template>
  <div class="app p-x-150px p-y-60px box-border">
    <div class="main w-full rounded-md">
      <resume-header :color="color" />
      <div class="mt-20px">
        <resume-content :color="color" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRandomColor } from "./utils";
import ResumeHeader from "./components/Header";
import ResumeContent from "./components/Content";

export default defineComponent({
  name: "App",
  components: {
    ResumeHeader,
    ResumeContent,
  },
  setup() {
    const color = useRandomColor();

    return {
      color,
    };
  },
});
</script>

<style scoped>
.main {
  box-shadow: 0 0 10px var(--shadow);
}
</style>
