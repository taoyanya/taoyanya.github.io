<template>
  <div>
    <resume-title title="Education" :color="color" />
    <div class="mt-10px">
      <resume-text :color="color">
        <div
          class="flex justify-between items-center"
          v-for="item of educations"
          :key="item.start"
        >
          <div>{{ item.school }}</div>
          <div>{{ item.start }} - {{ item.end }}</div>
          <div>{{ item.major }} - {{ item.degree }}</div>
        </div>
      </resume-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { educationProps } from "./props";
import { resumeConfig } from "../../config";
import ResumeTitle from "./Title.vue";
import ResumeText from "./Text.vue";

export default defineComponent({
  name: "Education",
  props: educationProps,
  components: { ResumeTitle, ResumeText },
  setup(props) {
    return {
      ...toRefs(props),
      educations: resumeConfig.educations,
    };
  },
});
</script>
