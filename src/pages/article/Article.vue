<template>
  <div class="h-full w-full">
    <div class="w-full text-2xl center~">使用coc配置lsp</div>
    <div class="center~ gap-x-2 mt-10px text-gray-500">
      <div class="center~">
        <div class="i-carbon-calendar text-base"></div>
        <div>2023/02/19</div>
      </div>
      <div class="center~">
        <div class="i-carbon-tag-group text-base"></div>
        <div>Vim</div>
      </div>
    </div>
    <div class="mt-10px">
      <md-editor :preview-only="true" v-model="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default defineComponent({
  name: "Article",
  components: { MdEditor },
  setup() {
    return {
      text: "**Test**",
    };
  },
});
</script>
