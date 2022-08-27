import { createApp } from "vue";
import App from "../App/App.vue";

document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App);
    app.mount("#app");
});