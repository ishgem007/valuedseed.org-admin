import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export const token = VueCookies.get('vs_token')
export const id = VueCookies.get('vs_id')
export const role = VueCookies.get('vs_role')
export const authenticated = VueCookies.get('vs_authenticated')
