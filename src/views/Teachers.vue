<template>
  <div>
    <Header />
    <main class="container-fluid px-0 g-pt-65">
      <div class="row no-gutters g-pos-rel g-overflow-x-hidden">
        <Sidebar />
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
            <TeacherComponent/>
          <Footer />
        </div>
      </div>
    </main>
</div>
</template>
<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
import TeacherComponent from '../components/TeacherComponent.vue'

// let $ = JQuery
export default {
  name:'Teachers',
  components:{
    Header,
    Sidebar,
    Footer,
    TeacherComponent
  },
  mounted() {
     
  },
  destroyed(){
     
  }
};
</script>