<template>
  <div class="w-full h-full flex items-center flex-wrap">
    <tag-item name="Vue" :count="5" />
    <tag-item name="JavaScript" :count="3" />
    <tag-item name="Solid.js" :count="1" />
    <tag-item name="Golang" :count="5" />
    <tag-item name="Vim" :count="2" />
    <tag-item name="JavaScript" :count="3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagItem from "@/components/tagItem/TagItem.vue";

export default defineComponent({
  name: "TagBoard",
  components: { TagItem },
  setup() {},
});
</script>
