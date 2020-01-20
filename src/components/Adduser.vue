<template>
  <div class="g-pa-20 g-bg-white">
            <!-- Basic Text Inputs -->
                <div class="g-brd-around col-6 g-rounded-4 g-pa-15 g-pa-20--md g-mb-30">
                  <h3 class="d-flex align-self-center text-uppercase g-font-size-12 g-font-size-default--md g-color-black g-mb-20">Create New User</h3>
                  <div class="form-group g-mb-30">
                    <label class="g-mb-10" for="inputGroup-1_1">Firstname</label>
                    <div class="g-pos-rel">
                      <input id="inputGroup-1_1" class="form-control form-control-md g-brd-gray-light-v7 g-brd-gray-light-v3--focus g-rounded-4 g-px-14 g-py-10" type="text" placeholder="User Firstname">
                    </div>
                  </div>
                  <div class="form-group g-mb-30">
                    <label class="g-mb-10" for="inputGroup-1_1">Lastname</label>
                    <div class="g-pos-rel">
                      <input id="inputGroup-1_1" class="form-control form-control-md g-brd-gray-light-v7 g-brd-gray-light-v3--focus g-rounded-4 g-px-14 g-py-10" type="text" placeholder="User Lastname">
                    </div>
                  </div>
                  <div class="form-group g-mb-30">
                    <label class="g-mb-10" for="inputGroup-1_1">Email Address</label>
                    <div class="g-pos-rel">
                      <input id="inputGroup-1_1" class="form-control form-control-md g-brd-gray-light-v7 g-brd-gray-light-v3--focus g-rounded-4 g-px-14 g-py-10" type="email" placeholder="User Email">
                    </div>
                  </div>


                   <div class="g-mb-30">
                    <label class="g-mb-10">Role</label>

                    <div class="form-group u-select--v3 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                      <select class="js-select u-select--v3-select u-sibling w-100" required="required" title="User Role" style="display: none;">
                        <option value="Super Admin" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Super Admin</span></span>'>Super Admin
                        </option>
                        <option value="Teacher" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Teacher</span></span>'>Teacher
                        </option>
                        <option value="Product" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Product Manager</span></span>'>Product Manager
                        </option>
                        <option value="Technical" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Technical Admin</span></span>'>Technical Admin
                        </option>
                      </select>

                      <div class="d-flex align-items-center g-absolute-centered--y g-right-0 g-color-gray-light-v6 g-color-lightblue-v9--sibling-opened g-mr-15">
                        <i class="hs-admin-angle-down"></i>
                      </div>
                    </div>
                  </div>
                  <!-- End Default Input -->


                <button
                  class="btn btn-md btn-xl--md u-btn-secondary g-width-160--md g-font-size-12 g-font-size-default--md g-mb-10"
                  type="submit" style=""
                >
                  Add user
                </button>
                 

                </div>
                <!-- End Basic Text Inputs -->
</div>
</template>
<script>
// let $ = JQuery
export default {
  name:'Adduser',
  components:{
    
  },
};
</script>