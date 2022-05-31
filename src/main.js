import { createApp } from "vue";
import App from "./App.vue";
import "./assets/reset.css";

if (!document.querySelector("#app")) {
  const appEntry = document.createElement("div");
  appEntry.id = "app";
  document.body.appendChild(appEntry);
}

const app = createApp(App);
app.mount("#app");
