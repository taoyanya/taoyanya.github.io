<template>
  <div class="w-full h-full">
    <n-timeline>
      <n-timeline-item content="现在" />
      <n-timeline-item title="测试文章" time="2023/02/18" type="success" />
      <n-timeline-item content="建站" />
    </n-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NTimeline, NTimelineItem } from "naive-ui";

export default defineComponent({
  name: "Record",
  components: { NTimeline, NTimelineItem },
  setup() {},
});
</script>
