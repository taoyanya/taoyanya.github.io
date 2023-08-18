<template>
  <div>
    <resume-title :color="color" title="Award" />
    <div class="mt-10px">
      <resume-text :color="color">
        <div
          class="flex justify-between leading-relaxed"
          v-for="item of awards"
          :key="item.name"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.time }}</div>
        </div>
      </resume-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { awardProps } from "./props";
import { resumeConfig } from "../../config";
import ResumeTitle from "./Title.vue";
import ResumeText from "./Text.vue";

export default defineComponent({
  name: "Award",
  props: awardProps,
  components: { ResumeTitle, ResumeText },
  setup(props) {
    return {
      ...toRefs(props),
      awards: resumeConfig.awards,
    };
  },
});
</script>
