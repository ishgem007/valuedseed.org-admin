<template>
    <div id="new-exp-form" class="rounded-0 p-0" style="display: none; width: 550px; max-width: 100%;">
    <header class="g-bg-gray-light-v8 g-px-15 g-px-30--sm g-py-20">
      <h2 class="g-font-weight-300 g-font-size-16 g-color-black mb-0">Edit Experience</h2>
    </header>

    <div class="g-pa-15 g-pa-30--sm">
      <form>
          <div class="row">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#dateFrom">From</label>

                            <div class="form-group mb-0">
                              <div class="form-group mb-0">
                                <div id="dateFromWrapper" class="u-datepicker-right u-datepicker--v3 g-pos-rel w-100 g-cursor-pointer g-brd-around g-brd-gray-light-v7 g-rounded-4">
                                  <input id="dateFrom" class="form-control form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="d M Y">
                                  <span class="g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-40 h-100 g-font-size-18 g-color-gray-light-v6 rounded-0">
                                  <i class="hs-admin-calendar g-absolute-centered"></i>
                                </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#dateTo">To</label>

                            <div class="form-group mb-0">
                              <div id="dateToWrapper" class="u-datepicker-right u-datepicker--v3 w-100 g-pos-rel g-cursor-pointer g-brd-around g-brd-gray-light-v7 g-rounded-4">
                                <input id="dateTo" class="form-control form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text" data-rp-wrapper="#dateToWrapper" data-rp-date-format="d M Y">
                                <span class="g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-40 h-100 g-font-size-18 g-color-gray-light-v6 rounded-0">
                                <i class="hs-admin-calendar g-absolute-centered"></i>
                              </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#company">Company</label>

                            <div class="form-group mb-0">
                              <input id="company" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text">
                            </div>
                          </div>

                          <div class="col-md-6 g-mb-20">
                            <label class="g-mb-10" for="#position">Position</label>

                            <div class="form-group mb-0">
                              <input id="position" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" type="text">
                            </div>
                          </div>
                        </div>
                        <div class="g-mb-30">
                          <label class="g-mb-10" for="#expirience">Your Experience</label>

                          <div class="form-group mb-0">
                            <textarea id="expirience" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12" rows="4"></textarea>
                          </div>
                        </div>
                        <button class="btn btn-md btn-xl--md u-btn-secondary g-width-160--md g-font-size-12 g-font-size-default--md g-mr-10 g-mb-10" type="submit">Save Changes</button>
                          <button class="btn btn-md btn-xl--md u-btn-outline-gray-dark-v6 g-font-size-12 g-font-size-default--md g-mb-10" type="reset" @click="toggle">Cancel</button>
                    </div>
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
  name:"ExpModal",
  mounted() {
      
    }
}
</script>