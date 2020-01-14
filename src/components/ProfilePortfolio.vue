<template>
    <div class="g-pa-20 g-bg-white">
      <div class="row">
        <SidebarProfile/>
        <Biography />
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
