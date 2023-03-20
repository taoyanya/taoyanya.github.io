<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/layout/Layout.vue";

export default defineComponent({
  name: "App",
  components: { Layout },
});
</script>
