import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  // 将store实例注入到根组件下的所有子组件中
  store,
  // 子组件通过this.$store来访问store
  render: h => h(App)
}).$mount("#app");
