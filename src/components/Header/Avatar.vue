<template>
  <div
    class="avatar bg-cover w-80px h-80px cursor-pointer"
    :class="activeClass"
    @click="active = !active"
  ></div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "Avatar",
  setup() {
    const active = ref(false);
    const activeClass = computed(() => {
      return active.value ? "rounded-1/2" : "rounded-2xl";
    });
    return {
      active,
      activeClass,
    };
  },
});
</script>

<style scoped>
.avatar {
  background-image: url("../../assets/avatar.jpg");
  transition: 0.2s;
}
</style>
