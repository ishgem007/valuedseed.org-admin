<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile/>
        <Interest />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
import Interest from "./subcomponents/Interest";
export default {
  name: "GeneralInfo",
  components:{
      SidebarProfile,
      Interest
  }
};
</script>
