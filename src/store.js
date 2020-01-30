import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: null,
    product:null,
    profilePicture: null
  },
  getters:{
  	getUserData: state => {
  		return state.auth
  	}
  },
  mutations: {
    SET_AUTH (state, payload) {
      state.auth = payload;
    },
    SET_PRODUCT (state, payload) {
      state.product = payload;
    }
  },
  actions:{
    getProduct({commit}, obj){
	  		const aut = 'Bearer '+ obj.token;
	  		const id = obj.id;
	  		axios({
		          'method': 'GET',
              'url': 'http://valuedseed.org/api/teachers/'+id+'/products',
		          "headers":{
		            'Authorization': aut
		          } 
		        }).then(response => {
          commit('SET_PRODUCT',response.data.data)
	  			}).catch(error => {
	  			console.log(error);
	  		})
  	}
  }
});
