import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.prototype.$db = "https://corsacshoppinglist-10dd.restdb.io/rest/shopping-list";


new Vue({
  render: h => h(App),
}).$mount('#app')
