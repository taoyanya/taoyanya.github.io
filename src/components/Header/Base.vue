<template>
  <div class="w-full h-full">
    <div class="text-xl flex items-end">
      <div class="text-3xl font-700">{{ resumeConfig.base.name }}</div>
      <div class="m-x-3px font-700">/</div>
      <div>{{ resumeConfig.base.eng }}</div>
    </div>
    <div class="text-xs flex mt-5px">
      <div class="p-x-6px p-y-1px border-box bg-light-50 rounded" :style="style">
        <i class="resume-icon" :class="[fontClass]"></i>
      </div>
      <div class="ml-5px p-x-6px p-y-1px border-box bg-light-50 rounded" :style="style">
        {{ resumeConfig.base.age }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { baseProps } from "./props";
import { userGender } from "./hooks";
import { resumeConfig } from "../../config";

export default defineComponent({
  name: "Base",
  props: baseProps,
  setup(props) {
    const style = computed(() => {
      return {
        color: props.color,
      };
    });
    const fontClass = userGender(resumeConfig.base.gender);

    return {
      resumeConfig,
      style,
      fontClass,
    };
  },
});
</script>
