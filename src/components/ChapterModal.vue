<template>
    <div id="new-project-form" class="rounded-0 p-0" style="display: none; width: 790px; max-width: 100%;">
    <header class="g-bg-gray-light-v8 g-px-15 g-px-30--sm g-py-20">
      <h2 class="g-font-weight-300 g-font-size-16 g-color-black mb-0">Create New Chapter</h2>
    </header>

    <div class="g-pa-15 g-pa-30--sm">
      <form>
        <h3 class="g-mb-20">
        <span class="g-font-weight-300 g-font-size-20 g-color-black">Title</span>
      </h3>
      <div class="form-group g-mb-35">
          <input type="text" class="form-control form-control-md g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-pa-20"/>
        </div>

        <h3 class="g-mb-20">
        <span class="g-font-weight-300 g-font-size-20 g-color-black">Description</span>
      </h3>

        <div class="form-group g-mb-35">
          <textarea class="form-control form-control-md g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-pa-20" rows="5">
          </textarea>
        </div>

        <!-- <div class="g-mb-35">
          <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">Add Subtopic</h3>
          <div class="u-tagsinput--v1">
            <input class="js-tagsinput" type="text">
          </div>
        </div>
 -->
        <div class="g-mb-45">
          <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">File Attachment</h3>

          <div class="media g-brd-bottom g-brd-gray-light-v7 g-pb-15">
            <div class="g-mb-5">
                  <a class="js-file-upload d-flex align-items-center u-link-v5 g-color-secondary mb-0" href="#" data-element-classes="d-flex align-items-center g-parent g-mb-15" data-icon-classes="hs-admin-file g-font-size-18 g-color-gray-light-v6 g-color-secondary--parent-hover g-mr-15"
                  data-text-classes="g-color-gray-dark-v6 g-color-secondary--parent-hover" data-remove-btn-classes="hs-admin-close g-font-size-14 g-color-primary opacity-0 g-opacity-1--parent-hover g-cursor-pointer g-ml-15">
                    <i class="hs-admin-plus g-font-size-16 g-mr-15"></i>
                    Add Attachment
                  </a>
              </div>

            <!-- <div class="media-body d-flex align-self-center align-items-center justify-content-end g-ml-10 g-ml-0--sm">
              <div class="g-mb-5">
                  <a class="js-file-upload d-flex align-items-center u-link-v5 g-color-secondary mb-0" href="#" data-element-classes="d-flex align-items-center g-parent g-mb-15" data-icon-classes="hs-admin-file g-font-size-18 g-color-gray-light-v6 g-color-secondary--parent-hover g-mr-15"
                  data-text-classes="g-color-gray-dark-v6 g-color-secondary--parent-hover" data-remove-btn-classes="hs-admin-close g-font-size-14 g-color-primary opacity-0 g-opacity-1--parent-hover g-cursor-pointer g-ml-15">
                    <i class="hs-admin-plus g-font-size-16 g-mr-15"></i>
                    Add Attachment
                  </a>
              </div>
            </div> -->
          </div>

          <!-- <div class="media g-brd-bottom g-brd-gray-light-v7 g-py-15">
            <div class="media-body d-flex align-self-center align-items-center justify-content-end g-ml-0--sm">
              <div class="g-mb-5">
                  <a class="js-file-upload d-flex align-items-center u-link-v5 g-color-secondary mb-0" href="#" data-element-classes="d-flex align-items-center g-parent g-mb-15" data-icon-classes="hs-admin-file g-font-size-18 g-color-gray-light-v6 g-color-secondary--parent-hover g-mr-15"
                  data-text-classes="g-color-gray-dark-v6 g-color-secondary--parent-hover" data-remove-btn-classes="hs-admin-close g-font-size-14 g-color-primary opacity-0 g-opacity-1--parent-hover g-cursor-pointer g-ml-15">
                    <i class="hs-admin-plus g-font-size-16 g-mr-15"></i>
                    Add Attachment
                  </a>
              </div>
            </div>
          </div> -->
        </div>
        <div class="d-flex">
          <button class="btn btn-xl u-btn-secondary g-width-160--md g-font-size-14 g-mr-15" type="submit">Create Project</button>
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