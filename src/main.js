import Vue from 'vue'
import App from './App.vue'

import Pagination from 'vue-pagination-2';
Vue.component('pagination', Pagination);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
