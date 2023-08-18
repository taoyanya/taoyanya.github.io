<template>
  <div class="app box-border">
    <div class="main w-full rounded-md">
      <resume-header :color="color" />
      <resume-content :color="color" />
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

@media screen and (max-width: 600px) {
  .app {
    padding: 0;
  }
}

@media screen and (min-width: 800px) {
  .app {
    padding: 150px 60px;
  }
}
</style>
