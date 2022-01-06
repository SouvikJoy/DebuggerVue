import { createApp } from "vue";
import App from "./App.vue";
import dtUiKit from "../dist/dtUiKit.mjs";
import "./scss/index.scss";

createApp(App).use(dtUiKit).mount("#app");