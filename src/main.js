import { createApp } from "vue";
import "./assets/sass/style.scss";
import App from "./App.vue";
import AutoRegisterComponents from "./plugins/auto-register-components";
// vue router
import router from "./router/index.js";
// vuetify
import { vuetify } from "./plugins/vuetify.js";
// mitt
import mitt from "mitt";
const emitter = mitt();
// axios
import Axios from "axios";

const app = createApp(App);

// to use globally
app.config.globalProperties.$axios = Axios;
// mitt
app.config.globalProperties.emitter = emitter;
// baseUrl
app.config.globalProperties.baseUrl = import.meta.env.VITE_BASE_URL;
app.use(vuetify);
app.use(AutoRegisterComponents);
app.use(router).mount("#app");
