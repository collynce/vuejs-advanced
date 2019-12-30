import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods:{
    showInfo(){
      alert('Data from the root instance')
    }
  },
  render: h => h(App)
}).$mount("#app");
