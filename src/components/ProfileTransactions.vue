<template>
 
    <div class="g-pa-20 g-bg-white">
      <div class="row">
        <SidebarProfile/>
        <InnerTransaction />
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
