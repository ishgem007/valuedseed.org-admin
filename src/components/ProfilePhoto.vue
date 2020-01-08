<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile />
        <div class="col-md-9">
          <div
            class="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md"
          >
            <header>
              <h2
                class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0"
              >Photos &amp; Videos</h2>
            </header>

            <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md" />

            <form>
              <div class="form-group">
                <input class="js-file-attachment" type="file" name="fileAttachment[]" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarProfile from "./subcomponents/SidebarProfile";
export default {
  name: "ProfilePhoto",
  components: {
    SidebarProfile
  }
};
</script>
