<template>
  <div class="w-full h-full">
    <div class="text-xl">共2篇文章</div>
    <div class="mt-20px">
      <n-timeline>
        <n-timeline-item
          title="使用coc配置lsp"
          time="2023/02/18"
          class="pointer~"
          @click="router.push({ name: 'Article' })"
        />
        <n-timeline-item
          title="自定义vim配置"
          time="2023/02/12"
          class="pointer~"
        />
      </n-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NTimeline, NTimelineItem } from "naive-ui";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "TagDetail",
  components: { NTimeline, NTimelineItem },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const tag = route.query.tag;

    return {
      router,
    };
  },
});
</script>
