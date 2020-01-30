<template>
    <div class="col-md-9">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md" v-for="(exp,index) in profileInfo.experiences" :key="index">
                  <header>
                    <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">Biography</h2>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md">

                  <form>
                    <div class="g-mb-20">
                      <label class="g-mb-10" for="#bio">Your Bio</label>

                      <div class="form-group mb-0">
                        <textarea id="bio" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" rows="5" v-model="profileInfo.biography"></textarea>
                      </div>
                    </div>
                    <div class="d-flex g-mb-40" v-if="data.length > 0">
                      <a class="u-link-v5 d-flex align-items-center g-color-secondary" href="#!">
                        <i class="hs-admin-check g-font-size-16"></i>
                        <span class="g-ml-8">Save</span>
                      </a>
                    </div>

                    <header>
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">Experience</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md">


                    <div class="g-mb-30">
                      <header class="row">
                        <div class="col-md order-md-2 ml-md-auto text-md-right g-font-weight-300 g-color-gray-dark-v11 g-mb-10">
                          <div class="media align-items-start">
                            <div class="media-body">{{exp.from | moment("MMMM YYYY") }} to {{exp.to | moment("MMMM YYYY") }}</div>

                            <a class="u-link-v5 d-flex g-font-size-16 g-color-gray-light-v6 g-color-secondary--hover g-ml-30 js-fancybox" href="#!" data-src="#new-exp-form">
                              <i class="hs-admin-pencil"></i>
                            </a>

                            <a class="u-link-v5 d-flex g-font-size-16 g-color-gray-light-v6 g-color-secondary--hover g-ml-15" href="#">
                              <i class="hs-admin-trash"></i>
                            </a>
                          </div>
                        </div>

                        <div class="col-md order-md-1 g-mr-20 g-mb-10">
                          <h3 class="g-font-weight-400 g-font-size-16 g-color-black mb-0">{{exp.company}}</h3>
                          <em class="d-block g-font-style-normal g-color-gray-dark-v12">Apple Inc.</em>
                        </div>
                      </header>

                      <p class="g-color-black mb-0">{{exp.description}}</p>
                    </div>
                   
                      <div class="d-flex g-mb-40">
                        <a class="u-link-v5 d-flex align-items-center g-color-secondary g-ml-30" href="#!">
                          <span class="u-badge-v2--xl g-pos-rel g-transform-origin--top-left g-bg-lightblue-v3 g-font-size-10 g-color-white">
                          <i class="g-absolute-centered" :class='iconToShow'></i>
                        </span>
                          <span class="g-ml-15" @click="toggle">{{msgToShow}}</span>
                        </a>
                    </div>
                    <div>
                    </div>
                    <div class="row" v-if="show">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#dateFrom">From</label>

                            <div class="form-group mb-0">
                              <div class="form-group mb-0">
                                <div id="dateFromWrapper" class="u-datepicker-right u-datepicker--v3 g-pos-rel w-100 g-cursor-pointer g-brd-around g-brd-gray-light-v7 g-rounded-4">
                                  <input id="dateFrom" class="form-control form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="d M Y">
                                  <span class="g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-40 h-100 g-font-size-18 g-color-gray-light-v6 rounded-0">
                                  <i class="hs-admin-calendar g-absolute-centered"></i>
                                </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#dateTo">To</label>

                            <div class="form-group mb-0">
                              <div id="dateToWrapper" class="u-datepicker-right u-datepicker--v3 w-100 g-pos-rel g-cursor-pointer g-brd-around g-brd-gray-light-v7 g-rounded-4">
                                <input id="dateTo" class="form-control form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text" data-rp-wrapper="#dateToWrapper" data-rp-date-format="d M Y">
                                <span class="g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-40 h-100 g-font-size-18 g-color-gray-light-v6 rounded-0">
                                <i class="hs-admin-calendar g-absolute-centered"></i>
                              </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#company">Company</label>

                            <div class="form-group mb-0">
                              <input id="company" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text">
                            </div>
                          </div>

                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#position">Position</label>

                            <div class="form-group mb-0">
                              <input id="position" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text">
                            </div>
                          </div>
                        </div>
                        <div class="g-mb-30">
                          <label class="g-mb-10" for="#expirience">Your Experience</label>

                          <div class="form-group mb-0">
                            <textarea id="expirience" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" rows="4"></textarea>
                          </div>
                        </div>
                        <button class="btn btn-md btn-xl--md u-btn-secondary g-width-160--md g-font-size-12 g-font-size-default--md g-mr-10 g-mb-10" type="submit">Save Changes</button>
                          <button class="btn btn-md btn-xl--md u-btn-outline-gray-dark-v6 g-font-size-12 g-font-size-default--md g-mb-10" type="reset" @click="toggle">Cancel</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
</template>
<script>
export default {
    name:"Biography",
    data(){
      return{
        data:"",
        show:false,
        profileInfo: null
      }
    },
    methods:{
        toggle:function(){
            this.show = !this.show;
          },
          getProfile(id,token){
	  		const auth = 'Bearer '+ token;
	  		this.$http({ 
		          method: 'GET',
		          'url': 'http://valuedseed.org/api/teachers/'+id+'/profile',
		          "headers":{
		            'Authorization': auth
		          } 
		        }).then(response => {
	  			this.profileInfo = response.data[0]
	  		}).catch(error=>{
	  			console.log(error);
	  		})
	  	},

    },
    computed:{
        iconToShow(){
          return this.show ? 'hs-admin-minus' : 'hs-admin-plus'
        },
        msgToShow(){
          return this.show ? 'Close' : 'Add More'
        },
        userData(){
        return this.$store.getters.getUserData
        }
    },
    mounted(){
      if(this.profileInfo == null){
        this.getProfile(this.$store.state.auth.id,this.$store.state.auth.token)
      }
    }
};
</script>