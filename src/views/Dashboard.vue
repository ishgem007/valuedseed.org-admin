<template>
  <div>
    <Header />
    <main class="container-fluid px-0 g-pt-65">
      <div class="row no-gutters g-pos-rel g-overflow-x-hidden">
        <Sidebar />
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-bg-lightblue-v10-opacity-0_5 g-pa-20">
              <Panel v-if="this.$store.state.auth.role === 'teacher'"/>
               <AdminPanel v-if="this.$store.state.auth.role === 'admin'"/>
              <Projects />
          </div>
          <Footer />
        </div>
      </div>
    </main>
    <NewChapter />
    <EditModal />
</div>
</template>
<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Panel from '../components/Panel.vue'
import Projects from '../components/Projects.vue'
import Footer from '../components/Footer.vue'
import NewChapter from '../components/ChapterModal.vue'

import AdminPanel from '../components/adminPanel.vue'

import EditModal from '../components/EditModal.vue'


// let $ = JQuery
export default {
  name:'Dashboard',
  data(){
    return{
      
    }
  },
  components:{
    Header,
    Sidebar,
    Panel,
    Projects,
    Footer,
    NewChapter,
    AdminPanel,
    EditModal
  }
  
}
</script>