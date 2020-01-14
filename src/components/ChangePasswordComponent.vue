<template>
  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md g-bg-white">
    <div class="g-pa-20">
      <div class="row">
        <SidebarProfile />
        <div class="col-md-9">
          <div
            class="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md"
          >
            <form>
              <header>
                <h2
                  class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0"
                >Change password</h2>
              </header>

            <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md" />
            <!-- main content -->
            <div class="row g-mb-20">
              <div class="col-md-3">
                <label class="mb-0" for="#currentPassword">Current Password</label>
              </div>

              <div class="col-md-9 align-self-center">
                <div>
                  <div class="form-group g-pos-rel mb-0">
                    <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                    <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                  </span>
                    <input id="currentPassword" name="currentPassword" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12" type="password" required="required" data-msg="This field is mandatory"
                    data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true">
                  </div>

                  <a class="form-text g-color-secondary" href="#">
                    <small class="g-font-size-default g-mt-8">Forgot Your Password?</small>
                  </a>
                </div>
              </div>
            </div>
            <div class="row g-mb-20">
              <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                <label class="mb-0" for="#newPassword">New Password</label>
              </div>

              <div class="col-md-9 align-self-center">
                <div class="form-group g-pos-rel mb-0">
                  <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                  <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                </span>
                  <input id="newPassword" name="newPassword" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12" type="password" required="required" data-msg="This field is mandatory"
                  data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true">
                </div>
              </div>
            </div>
           <div class="row g-mb-20">
              <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                <label class="mb-0" for="#confirmNewPassword">Confirm Password</label>
              </div>

              <div class="col-md-9 align-self-center">
                <div class="form-group g-pos-rel mb-0">
                  <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                  <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                </span>
                  <input id="confirmNewPassword" name="confirmNewPassword" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12" type="password" required="required" data-msg="This field is mandatory"
                  data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true">
                </div>
              </div>
            </div>
              <div>
                <button class="btn btn-md btn-xl--md u-btn-secondary g-width-160--md g-font-size-12 g-font-size-default--md g-mb-10" type="submit" style="margin-right:5px;">Save Changes</button>
                <button class="btn btn-md btn-xl--md u-btn-outline-gray-dark-v6 g-font-size-12 g-font-size-default--md g-mr-10 g-mb-10" type="reset">Cancel</button>
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
  name: "ChangePasswordComponent",
  components: {
    SidebarProfile
  },
  mounted() {
      
    }
};
</script>
