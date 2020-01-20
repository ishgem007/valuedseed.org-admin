<template>
  <div class="g-pa-20 g-bg-white">
            <!-- Basic Text Inputs -->
                <div class="g-brd-around col-10 g-rounded-4 g-pa-15 g-pa-20--md g-mb-30">
                  <h3 class="d-flex align-self-center text-uppercase g-font-size-12 g-font-size-default--md g-color-black g-mb-20">Create Notification </h3>
                  <div class="form-group g-mb-30">
                    <label class="g-mb-10" for="inputGroup-1_1">User Email</label>
                    <div class="g-pos-rel">
                      <input id="inputGroup-1_1" class="form-control form-control-md g-brd-gray-light-v7 g-brd-gray-light-v3--focus g-rounded-4 g-px-14 g-py-10" type="text" placeholder="User Email">
                    </div>
                  </div>
                  <div class="form-group g-mb-30">
                    <label class="g-mb-10" for="inputGroup-1_1">Subject</label>
                    <div class="g-pos-rel">
                      <input id="inputGroup-1_1" class="form-control form-control-md g-brd-gray-light-v7 g-brd-gray-light-v3--focus g-rounded-4 g-px-14 g-py-10" type="text" placeholder="Subject">
                    </div>
                  </div>
                  <div class="form-group g-mb-30">
                    <label class="g-mb-10" for="inputGroup-1_1">Message</label>
                    <div class="g-pos-rel">
                       <div class="js-text-editor" data-height="250" data-placeholder="start typing here"></div>
                    </div>
                  </div>

                <button
                  class="btn btn-md btn-xl--md u-btn-secondary g-width-160--md g-font-size-12 g-font-size-default--md g-mb-10"
                  type="submit" style=""
                >
                 Send Notification
                </button>
                 

                </div>
                <!-- End Basic Text Inputs -->
</div>
</template>
<script>
// let $ = JQuery
export default {
  name:'sendNotification',
  components:{
    
  },
};
</script>