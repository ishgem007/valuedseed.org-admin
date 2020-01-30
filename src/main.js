import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import VueCookies from 'vue-cookies'

import router from  './routes'
import JQuery from 'jquery';

 
import {token, id, role, authenticated} from './cookies'
import store from  './store'

Vue.use(require('vue-moment'));

Vue.prototype.$http = axios
Vue.prototype.$token = token
Vue.prototype.$id = id
Vue.prototype.$role = role
Vue.prototype.$authenticated = authenticated


Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topRight'
})
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  JQuery,
  store,
  render: h => h(App),
}).$mount('#app')
