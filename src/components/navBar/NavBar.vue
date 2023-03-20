<template>
  <div
    class="navBar w-full h-full text-light-50 between~ px-10px"
    :class="[navBarStyle]"
  >
    <div class="pcNavBar w-full">
      <p-c-nav-bar />
    </div>
    <div class="mobileNavBar w-full">
      <mobile-nav-bar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";
import PCNavBar from "./PCNavBar.vue";
import MobileNavBar from "./MobileNavBar.vue";

export default defineComponent({
  name: "NavBar",
  components: { PCNavBar, MobileNavBar },
  setup() {
    const navBarStyle = ref("inherit");

    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop === 0) {
        navBarStyle.value = "";
      } else {
        navBarStyle.value = "bg-gray-700";
      }
    }

    onMounted(() => {
      document.querySelector("body")?.addEventListener("scroll", handleScroll);
    });
    onBeforeUnmount(() => {
      document
        .querySelector("body")
        ?.removeEventListener("scroll", handleScroll);
    });

    return {
      navBarStyle,
    };
  },
});
</script>

<style scoped lang="less">
.navBar {
  transition: 0.5s;
}

@media screen and (min-width: 600px) {
  .pcNavBar {
    display: block;
  }
  .mobileNavBar {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .pcNavBar {
    display: none;
  }
  .mobileNavBar {
    display: block;
  }
}
</style>
