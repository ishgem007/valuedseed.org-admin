import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import router from  './routes'
import JQuery from 'jquery';

 

Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topRight'
})
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  JQuery,
  render: h => h(App),
}).$mount('#app')
