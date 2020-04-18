import Vue from 'vue'
import App from './App.vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false;
Vue.prototype.$db = "https://corsacshoppinglist-10dd.restdb.io/rest/shopping-list";

Vue.use(Vue2TouchEvents);

new Vue({
  render: h => h(App),
}).$mount('#app')
