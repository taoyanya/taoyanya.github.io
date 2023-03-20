<template>
  <div class="w-full h-full flex flex-col justify-between">
    <div class="flex-1">
      <post-item
        cover="https://images.pexels.com/photos/15588318/pexels-photo-15588318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="测试项"
        desc="一个简单的测试项"
        :date="111111"
        :tag="['test']"
      />
      <post-item
        cover="https://images.pexels.com/photos/15588318/pexels-photo-15588318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="测试项"
        desc="一个简单的测试项"
        :date="111111"
        :tag="['test']"
      />
    </div>
    <div class="flex-none w-full center~">
      <n-pagination v-model:page="page" :page-count="6" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NPagination } from "naive-ui";
import PostItem from "@/components/postItem/PostItem.vue";

export default defineComponent({
  name: "Home",
  components: { PostItem, NPagination },
  setup() {
    return {
      page: ref(1),
    };
  },
});
</script>
