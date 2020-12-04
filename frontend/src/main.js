import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
