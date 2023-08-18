<template>
  <div
    class="w-full min-h-1/4 text-light-50 flex justify-center items-center flex-col p-20px box-border overflow-hidden"
    :style="style"
  >
    <media-container>
      <div class="flex items-center">
        <avatar />
        <div class="ml-10px">
          <resume-base :color="color" />
        </div>
      </div>
      <div class="mt-10px indent leading-normal">{{ desc }}</div>
    </media-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { props } from "./props";
import { resumeConfig } from "../../config";
import Avatar from "./Avatar.vue";
import ResumeBase from "./Base.vue";
import MediaContainer from "../MediaContainer";

export default defineComponent({
  name: "Header",
  props,
  components: {
    Avatar,
    ResumeBase,
    MediaContainer,
  },
  setup(props) {
    const style = computed(() => {
      return {
        backgroundColor: props.color,
      };
    });

    return {
      style,
      color: props.color,
      desc: resumeConfig.desc,
    };
  },
});
</script>
