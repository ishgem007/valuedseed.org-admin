import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: null,
    portfolio:null,
    product:null,
    topics:null,
    profilePicture:null
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
    SET_PORTFOLIO (state, payload) {
      state.profile = payload;
    },
    SET_PRODUCT (state, payload) {
      state.product = payload;
    },
    SET_TOPICS (state, payload) {
      state.topics = payload;
    },
    SET_PROFILE_PICTURE(){

    }
  },
  actions:{
  	fetchProfilePicture({commit}){
	  		const aut = 'Bearer '+ this.state.auth.token;
	  		const id = this.state.auth.id;
	  		axios({
		          'method': 'GET',
		          'url': 'http://valuedseed.org/api/users/'+id+'/images',
		          "headers":{
		            'Authorization': aut
		          } 
		        }).then(response => {
	  			console.log(response)
	  			}).catch(error => {
	  			console.log(error);
	  		})
  	}
  }
});
