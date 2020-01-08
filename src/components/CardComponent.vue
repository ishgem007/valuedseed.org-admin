<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile/>
        <Cards />
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
