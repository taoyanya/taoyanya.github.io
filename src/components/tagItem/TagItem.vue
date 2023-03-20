<template>
  <div
    class="mx-8px pointer~"
    :style="[tagStyle]"
    @click="router.push({ name: 'TagDetail', query: { tag: name } })"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
import { props } from "./props";
import { getRandomColor } from "@/utils";
import { router } from "@/router";

export default defineComponent({
  name: "TagItem",
  props,
  setup(props) {
    const { name, count } = toRefs(props);
    const tagStyle = computed(() => {
      return count.value! > 5
        ? {
            fontSize: "28px",
            color: getRandomColor(),
          }
        : {
            fontSize: `${12 + count.value!}px`,
            color: getRandomColor(),
          };
    });

    return {
      name,
      router,
      tagStyle,
    };
  },
});
</script>
