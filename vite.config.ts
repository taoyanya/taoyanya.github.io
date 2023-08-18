import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import unocss from "unocss/vite";
import { presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), unocss()],
  build: {
    outDir: "docs"
  }
});
