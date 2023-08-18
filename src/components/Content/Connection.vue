<template>
  <div>
    <resume-title title="Connection" :color="color" />
    <div class="mt-10px text-xl">
      <resume-text :color="color">
        <div class="flex items-center">
          <i class="resume-icon icon-email text-lg"></i>
          <div
            class="ml-10px cursor-pointer"
            title="点击复制"
            @click="copy(connection.email)"
          >
            {{ connection.email }}
          </div>
        </div>
        <div class="flex items-center mt-5px">
          <i class="resume-icon icon-github text-lg"></i>
          <div
            class="ml-10px cursor-pointer"
            title="点击复制"
            @click="copy(connection.github)"
          >
            {{ connection.github }}
          </div>
        </div>
      </resume-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { connectionProps } from "./props";
import { resumeConfig } from "../../config";
import ResumeTitle from "./Title.vue";
import ResumeText from "./Text.vue";

export default defineComponent({
  name: "Connection",
  props: connectionProps,
  components: { ResumeText, ResumeTitle },
  setup(props) {
    const copy = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.log("copy error: ", err);
      }
    };

    return {
      copy,
      ...toRefs(props),
      connection: resumeConfig.connection,
    };
  },
});
</script>
