<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile/>
        <Biography />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
import Biography from "./subcomponents/Biography";
export default {
  name: "GeneralInfo",
  components:{
      SidebarProfile,
      Biography
  }
};
</script>
