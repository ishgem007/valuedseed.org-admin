<template>
  <div>
    <Header />
    <main class="container-fluid px-0 g-pt-65">
      <div class="row no-gutters g-pos-rel g-overflow-x-hidden">
        <Sidebar />
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-bg-lightblue-v10-opacity-0_5 g-pa-20">
              <!-- Panel score Card -->
              <sendNotification /> 
                <!-- End Profile Sidebar Nav -->
               
          </div>
          <Footer />
        </div>
      </div>
    </main>
</div>
</template> 
<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import sendNotification from '../components/sendNotification.vue'
import Footer from '../components/Footer.vue'

// let $ = JQuery
export default {
  name:'Newnotification',
  components:{
    Header,
    Sidebar,
    sendNotification,
    Footer
  },
};
</script>