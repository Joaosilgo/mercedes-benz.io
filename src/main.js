import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}


new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");