<template>
  <div>
    <Header />
    <main class="container-fluid px-0 g-pt-65">
      <div class="row no-gutters g-pos-rel g-overflow-x-hidden">
        <Sidebar />
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
            <SubjectByTeacherComponent title="Subjects (48)" subtitle="Subjects and their respective teachers"/>
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
import SubjectByTeacherComponent from '../components/SubjectByTeacherComponent.vue'

// let $ = JQuery
export default {
  name:'SubjectByTeacher',
  components:{
    Header,
    Sidebar,
    Footer,
    SubjectByTeacherComponent
  },
  mounted() {
     
  },
  destroyed(){
     
  }
};
</script>