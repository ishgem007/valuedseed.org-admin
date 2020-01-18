<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card g-brd-gray-light-v7 u-card-v1 g-pa-15 g-pa-25-30--md g-mb-30">
        <div class="g-pa-20">
          <div class="row">
            <SidebarProfile/>
            <Otherinfo />
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
import Otherinfo from "./subcomponents/Otherinfo";
export default {
  name: "GeneralInfo",
  components:{
      SidebarProfile,
      Otherinfo
  }
};
</script>
