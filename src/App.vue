<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Portfolio from './views/Portfolio.vue'
export default {
  name: 'app'
 //  components: { "v-tags-input": VoerroTagsInput },
 //  data(){
	//   	return{
	// 	        selectedTags: [
	// 	            { key: 'web-development', value: 'Web Development' },
	// 	            { key: 'php', value: 'PHP' },
	// 	            { key: 'javascript', value: 'JavaScript' },
	// 	        ]
	//       	}
 //    },
	// methods:{
	//     setSelectedTags() {
	//         this.selectedTags = [{ key: 'php', value: 'PHP' }];
	//     }
	// }
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
