<template>
  <div class="w-full h-full text-blue-500">
    <div class="header w-full h-60px">
      <nav-bar />
    </div>
    <div class="main h-full">
      <div class="cover image~ w-screen h-550px center~ text-light-50 text-4xl">
        <div>{{ nav }}</div>
        <div class="underline ml-8px">_</div>
      </div>
      <div class="body center~ pb-20px box-border h-full">
        <div
          class="content bg-light-50 text-dark-700 px-60px py-30px box-border w-4/5"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/navBar/NavBar.vue";
import { nav } from "@/router";

export default defineComponent({
  name: "Layout",
  components: { NavBar },
  setup() {
    return {
      nav,
    };
  },
});
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.main {
  .cover {
    background-image: url("../assets/boy_girl.png");
    .underline {
      animation: underlineShow 1.2s infinite ease-in-out;
    }
  }
  .body {
    .content {
      transform: translateY(-30px);
      border-radius: 5px;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    }
  }
}

@keyframes underlineShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
