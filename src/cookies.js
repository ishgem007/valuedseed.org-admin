import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export const token = VueCookies.get('vs_token')
export const id = VueCookies.get('vs_id')
export const role = VueCookies.get('vs_role')
export const first_name = VueCookies.get('vs_first_name')
export const last_name = VueCookies.get('vs_last_name')
export const gender = VueCookies.get('vs_gender')
