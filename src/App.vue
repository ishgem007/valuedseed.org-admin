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
	  		if(this.$id){
			  	const arr = {
			  		'id':this.$id,
			  		'token':this.$token,
					'role':this.$role,
					'authenticated' : this.$authenticated
				  };
	  			this.$store.commit('SET_AUTH',arr);
	  			this.$cookies.remove('vs_id');
	  			this.$cookies.remove('vs_token');
	  			this.$cookies.remove('vs_role');
	  			this.$cookies.remove('vs_authenticated');
	  		}
	  	},
	  	setProduct(){
			  return this.$store.dispatch('getProduct',{ id: this.$store.state.auth.id, token: this.$store.state.auth.token })
			
	  	}
  },
  mounted(){
	  this.init();
	  if(this.$store.state.product === null){
		  this.setProduct();
	  }
	
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
