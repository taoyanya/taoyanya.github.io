<template>
  <div>
    <resume-title :color="color" title="Experience" />
    <div class="mt-10px">
      <resume-text :color="color">
        <div v-for="item of experiences" :key="item.start">
          <div class="flex justify-between text-lg">
            <div>{{ item.name }}</div>
            <div>{{ item.start }} - {{ item.end }}</div>
            <div>{{ item.company }}</div>
          </div>
          <div class="mt-5px flex">
            <div class="flex-none">工作内容: </div>
            <div>{{ item.content }}</div>
          </div>
        </div>
      </resume-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { experienceProps } from "./props";
import { resumeConfig } from "../../config";
import ResumeTitle from "./Title.vue";
import ResumeText from "./Text.vue";

export default defineComponent({
  name: "Experience",
  props: experienceProps,
  components: { ResumeTitle, ResumeText },
  setup(props) {
    return {
      ...toRefs(props),
      experiences: resumeConfig.experiences,
    };
  },
});
</script>
