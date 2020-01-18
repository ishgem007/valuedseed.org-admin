<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card g-brd-gray-light-v7 u-card-v1 g-pa-15 g-pa-25-30--md g-mb-30">
        <div class="g-pa-20">
          
          <div class="row d-flex align-self-center align-items-center">
            <SidebarProfile/>
            <Cards />
          </div>
 
        </div>
    </div>
  </div>
</div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
import Cards from "./subcomponents/Cards";
export default {
  name: "GeneralInfo",
  components:{
      SidebarProfile,
      Cards
  }
};
</script>
