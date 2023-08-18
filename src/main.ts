import { createApp } from "vue";
import "./style.css";
import "uno.css";
import { resumeConfig } from "./config";
import App from "./App.vue";

createApp(App).mount("#app");

document.title = resumeConfig.resumeTitle;
