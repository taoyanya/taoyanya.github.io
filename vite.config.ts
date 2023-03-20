import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import unocss from "unocss/vite";
import { resolve } from "path";
import { presetIcons, presetUno } from "unocss";
import * as carbon from "@iconify-json/carbon";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    unocss({
      shortcuts: {
        "pointer~": "cursor-pointer",
        "image~": "bg-cover bg-no-repeat bg-center",
        "center~": "flex justify-center items-center",
        "between~": "flex justify-between items-center",
      },
      presets: [
        presetUno(),
        presetIcons({
          collections: {
            carbon: carbon.icons as any,
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
