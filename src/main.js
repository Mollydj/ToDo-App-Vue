import Vue from "vue";
import App from "./App.vue";
import { MdField } from "vue-material/dist/components";
import { VueMaterial } from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdField, VueMaterial);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
