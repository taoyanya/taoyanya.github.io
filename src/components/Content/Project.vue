<template>
  <div>
    <resume-title title="Project" :color="color" />
    <div class="mt-10px">
      <resume-text :color="color">
        <div class="" v-for="item of projects" :key="item.name">
          <div>名称:{{ item.name }}</div>
          <div class="mt-5px" v-if="item.link">链接:{{ item.link }}</div>
          <div class="flex mt-5px">
            <div class="flex-none">简介:</div>
            <div class="leading-normal" v-html="item.desc" ref="descList"></div>
          </div>
        </div>
      </resume-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onMounted, ref } from "vue";
import { projectProps } from "./props";
import { useStrongText } from "./hooks";
import { resumeConfig } from "../../config";
import ResumeTitle from "./Title.vue";
import ResumeText from "./Text.vue";

export default defineComponent({
  name: "Project",
  props: projectProps,
  components: { ResumeTitle, ResumeText },
  setup(props) {
    const descList = ref<Element[]>();

    onMounted(() => {
      useStrongText(descList, props.color!);
    });

    return {
      descList,
      ...toRefs(props),
      projects: resumeConfig.projects,
    };
  },
});
</script>

<style scoped>
strong {
  font-style: normal;
  color: #f00;
}
</style>
