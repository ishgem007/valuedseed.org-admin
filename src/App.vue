<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Portfolio from './views/Portfolio.vue'
export default {
  name: 'app',
  data(){
  	return{
  		
  	}
  },
  methods:{	
	  	init(){
	  		console.log(this.$id);
	  		if(this.$id){
			  	const arr = {
			  		'id':this.$id,
			  		'token':this.$token,
			  		'role':this.$role,
			  		'fn':this.$fn,
			  		'ln':this.$ln,
			  		'gender':this.$gender
			  	};
	  			this.$store.commit('SET_AUTH',arr);
	  			this.$cookies.remove('vs_id');
	  			this.$cookies.remove('vs_token');
	  			this.$cookies.remove('vs_role');
	  			this.$cookies.remove('vs_first_name');
	  			this.$cookies.remove('vs_last_name');
	  			this.$cookies.remove('vs_gender');
	  		}
	  	console.log(this.$id);
	  	},
	  	setProfile(id,token){
	  		const dis = this;
	  		const auth = 'Bearer '+ token;
	  		this.$http({ 
		          method: 'GET',
		          'url': 'http://valuedseed.org/api/teachers/'+id+'/profile',
		          "headers":{
		            'Authorization': auth
		          } 
		        }).then(response => {
	  			console.log(response.data[0]);
	  			this.$store.commit('SET_PROFILE',response.data[0]);
	  		}).catch(error=>{
	  			console.log(error);
	  		})
	  	},
	  	setProduct(id,token){
	  		const dis = this;
	  		const auth = 'Bearer '+ token;
	  		this.$http({ 
		          'method': 'GET',
		          'url': 'http://valuedseed.org/api/teachers/'+id+'/products',
		          "headers":{
		            'Authorization': auth
		          } 
		        }).then(response => {
	  			console.log(response.data.data);
	  			this.$store.commit('SET_PRODUCT',response.data.data);
	  		}).catch(error=>{
	  			console.log(error);
	  		})
	  	},
	  	setTopics(pid,token){
	  		const dis = this;
	  		const auth = 'Bearer '+ token;
	  		this.$http({ 
		          'method': 'GET',
		          'url': 'http://valuedseed.org/api/products/'+pid+'/topics',
		          "headers":{
		            'Authorization': auth
		          } 
		        }).then(response => {
	  			console.log(response.data);
	  			this.$store.commit('SET_TOPICS',response.data);
	  		}).catch(error=>{
	  			console.log(error);
	  		})
	  	}
  },
  mounted(){
  // 	this.init()
  // 	this.setProfile(this.$store.state.auth.id,this.$store.state.auth.token);
  // 	this.setProduct(this.$store.state.auth.id,this.$store.state.auth.token);
 	// this.setTopics(this.$store.state.product.id,this.$store.state.auth.token);

  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
