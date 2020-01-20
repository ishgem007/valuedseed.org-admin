<template>
    <div id="assign-role" class="rounded-0 p-0" style="display: none;">
    <header class="g-bg-gray-light-v8 g-px-15 g-px-30--sm g-py-20">
      <h2 class="g-font-weight-300 g-font-size-16 g-color-black mb-0">Update user Role</h2>
    </header>

    <div class="g-pa-15 g-pa-30--sm">
      <form>
        <div class="g-mb-35">
          <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">Email Address</h3>
          <div class="u-tagsinput--v1">
           <input id="inputGroup-1_1" class="form-control form-control-md g-brd-gray-light-v7 g-brd-gray-light-v3--focus g-rounded-4 g-px-14 g-py-10" type="text" value="johndoe@all.com" readonly="">
          </div>
        </div>

        <div class="g-mb-45">
          <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">Select Role</h3>
          <div class="form-group u-select--v3 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
           <select class="js-select u-select--v3-select u-sibling w-100" required="required" title="-Select User Role" style="display: none;">
                        <option value="Super Admin" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Super Admin</span></span>'>Super Admin
                        </option>
                        <option value="Teacher" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Teacher</span></span>'>Teacher
                        </option>
                        <option value="Product" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Product Manager</span></span>'>Product Manager
                        </option>
                        <option value="Technical" data-content='<span class="d-flex align-items-center w-100"><i class="hs-admin-link g-font-size-18 g-mr-15"></i><span>Technical Admin</span></span>'>Technical Admin
                        </option>
                      </select>

          </div>
        </div> 
        <div class="d-flex">
          <button class="btn btn-xl u-btn-secondary g-width-160--md g-font-size-14 g-mr-15" type="submit">Update Role</button>
          <button class="btn btn-xl u-btn-outline-gray-dark-v6 g-width-160--md g-font-size-14" type="reset" data-fancybox-close>Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.bootstrap-tagsinput {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  display: inline-block;
  padding: 4px 6px;
  color: #555;
  vertical-align: middle;
  border-radius: 4px;
  max-width: 100%;
  line-height: 22px;
  cursor: text;
}

.bootstrap-tagsinput input {
  border: none;
  box-shadow: none;
  outline: none;
  background-color: transparent;
  padding: 0 6px;
  margin: 0;
  width: auto;
  max-width: inherit;
}

.bootstrap-tagsinput.form-control input::-moz-placeholder {
  color: #777;
  opacity: 1;
}

.bootstrap-tagsinput.form-control input:-ms-input-placeholder {
  color: #777;
}

.bootstrap-tagsinput.form-control input::-webkit-input-placeholder {
  color: #777;
}

.bootstrap-tagsinput input:focus {
  border: none;
  box-shadow: none;
}

.bootstrap-tagsinput .tag {
  margin-right: 2px;
  color: white;
}

.bootstrap-tagsinput .tag [data-role="remove"] {
  margin-left: 8px;
  cursor: pointer;
}

.bootstrap-tagsinput .tag [data-role="remove"]:after {
  content: "x";
  padding: 0 2px;
}

.bootstrap-tagsinput .tag [data-role="remove"]:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.bootstrap-tagsinput .tag [data-role="remove"]:hover:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

</style>
<script>
export default {
  mounted() {
     

      // let pageScript = document.createElement('script')
      // pageScript.setAttribute('src', 'assets/assets/bottom.js')
      // document.head.appendChild(pageScript)
    }
};
</script>