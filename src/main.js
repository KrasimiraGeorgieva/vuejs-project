import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axiosPlugin from "./plugins/axiosPlugin";
import { authService } from '@/services/authServices';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(axiosPlugin);

Vue.mixin(authService);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
