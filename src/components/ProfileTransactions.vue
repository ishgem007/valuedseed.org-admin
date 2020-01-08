<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile/>
        <InnerTransaction />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
import InnerTransaction from "./subcomponents/InnerTransaction";
export default {
  name: "ProfileTransaction",
  components:{
      SidebarProfile,
      InnerTransaction
  }
};
</script>
