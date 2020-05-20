import Vue from "vue";
import App from "./App.vue";
import { MdField } from "vue-material/dist/components";
import VueMaterial from 'vue-material'
import VueInputAutowidth from 'vue-input-autowidth'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueInputAutowidth)
Vue.use(MdField, VueMaterial);

Vue.config.productionTip = false;



new Vue({
  render: (h) => h(App),
}).$mount("#app");
