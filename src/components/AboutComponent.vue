<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile />
        <div class="col-md-6">
          <div class="card g-brd-gray-light-v7 g-pa-15 g-pa-25-30--md g-mb-30">
                <section class="g-mb-20">
                  <h3 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black g-mb-20">About me</h3>
                  <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">
                    {{userData.biography}}
                  </p>
                </section>
              </div>
        </div>
        <div class="col-md-3 g-px-10 g-mb-20 g-mb-0--md">
                      <article class="g-bg-white g-overflow-hidden g-brd-around g-brd-gray-light-v7 g-rounded-4">
                        <header class="text-center g-bg-gray-light-v8 g-pa-20">
                          <h3 class="h6 text-uppercase g-font-weight-400 g-font-size-16 g-color-black mb-0"><strong>Other Information</strong></h3>
                        </header>

                        <div class="g-px-20 g-py-10">
                          <ul class="list-unstyled g-color-gray-dark-v12 g-min-height-50 g-px-10 g-mb-5">
                            <li class="mb-0">
                              <i class="hs-admin-check g-color-secondary g-mr-14"></i>
                              First Name: {{userData.fn}}
                            </li>
                            <li class="mb-0">
                              <i class="hs-admin-check g-color-secondary g-mr-14"></i>
                              Last Name: {{userData.ln}}
                            </li>
                            <li class="mb-0">
                              <i class="hs-admin-check g-color-secondary g-mr-14"></i>
                              Gender: {{userData.gender}}
                            </li>
                            <li class="mb-0">
                              <i class="hs-admin-check g-color-secondary g-mr-14"></i>
                              Phone: 08098767867
                            </li>
                            <li class="mb-0">
                              <i class="hs-admin-check g-color-secondary g-mr-14"></i>
                              State: Lagos
                            </li>
                            <li class="mb-0">
                              <i class="hs-admin-check g-color-secondary g-mr-14"></i>
                              Country: Nigeria
                            </li>
                          </ul>

                          <a class="btn btn-md btn-block u-btn-secondary g-font-size-default--md" href="/edit-profile">Edit Profile</a>
                        </div>
                      </article>
                    </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
export default {
  name: "AboutComponent",
  components: {
    SidebarProfile
  },
  computed:{
    userData(){
      return this.$store.getters.getUserData
    }
  },
  mounted() {
      
    }
};
</script>
