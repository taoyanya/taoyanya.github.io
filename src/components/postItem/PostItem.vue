<template>
  <div class="postItem w-full pointer~ mb-20px">
    <div
      class="cover image~ w-200px h-160px flex-none"
      :style="{ backgroundImage: `url(${cover})` }"
    ></div>
    <div
      class="flex-1 flex flex-col justify-between h-full py-15px px-10px box-border"
    >
      <div>
        <div class="text-lg text-bold">{{ title }}</div>
        <div class="text-xs mt-8px text-gray-600 mb-10px">{{ desc }}</div>
      </div>
      <div class="text-sm flex">
        <div class="center~" style="width: fit-content">
          <div class="i-carbon-calendar text-sm"></div>
          <div>{{ date }}</div>
        </div>
        <div class="center~ ml-20px" style="width: fit-content">
          <div class="i-carbon-tag-group text-sm"></div>
          <div class="text-sm">
            <span v-for="(item, index) of tags" :key="index">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { props } from "./props";

export default defineComponent({
  name: "PostItem",
  props,
  setup(props) {
    const tags = props.tag?.map((item) => {
      return "# " + item;
    });
    return {
      tags,
      ...toRefs(props),
    };
  },
});
</script>

<style scoped lang="less">
.postItem {
  .cover {
    border-radius: 3px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  }
}

@media screen and (min-width: 1000px) {
  .postItem {
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media screen and (max-width: 800px) {
  .postItem {
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
