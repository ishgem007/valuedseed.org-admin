
<template>
<div class="g-pa-20">
            <h1 class="g-font-weight-300 g-font-size-28 g-color-black g-mb-30">Chemistry</h1>

            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h3 class="g-font-weight-400 g-font-size-16 g-color-black mb-0">Mr Popoola</h3>
              </div>

              <div class="media d-md-flex align-items-center ml-auto">
                <div class="d-flex align-items-center">
                  <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-12">Show:</span>

                  <div class="u-select--v1 g-pr-20">
                    <select id="datatableEntries1" class="js-select u-select--v1-select w-100">
                      <option data-content='<span class="d-flex align-items-center g-line-height-1_2 g-color-black">5 Entries</span>' value="5">5 Entries</option>
                      <option data-content='<span class="d-flex align-items-center g-line-height-1_2 g-color-black">10 Entries</span>' value="10">10 Entries</option>
                      <option data-content='<span class="d-flex align-items-center g-line-height-1_2 g-color-black">15 Entries</span>' value="15">15 Entries</option>
                      <option data-content='<span class="d-flex align-items-center g-line-height-1_2 g-color-black">20 Entries</span>' value="20">20 Entries</option>
                      <option data-content='<span class="d-flex align-items-center g-line-height-1_2 g-color-black">25 Entries</span>' value="25">25 Entries</option>
                    </select>
                    <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6"></i>
                  </div>
                </div>

                <div class="d-flex g-ml-15 g-ml-55--md">
                  <div class="input-group g-pos-rel g-width-320--md">
                    <input id="datatableSearch1" class="form-control g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10" type="text" placeholder="Search for name, subject">
                    <button class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0" type="submit">
                      <i class="hs-admin-search g-absolute-centered"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive g-mb-40">
              <table class="table u-table--v3 g-color-black">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Chapter's Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Intr. to Chemistry</td>
                    <td>is simply dummy text of the printing and typesetting industry. Lorem Ipsum</td>
                    
                    <td>
                      <span class="u-tags-v1 text-center g-width-110 g-brd-around g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-py-4 g-px-15">Completed</span>
                    </td>
                    <td>
                      <span class="btn btn-info g-rounded-50" style="background:#f4f4f4;color:#000;border-color:#f4f4f4;"> <a href="#!"><i class="hs-admin-download"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#5bc0de;color:#fff !important;margin-left:3px;border-color:#5bc0de;"> <a href="#!"><i class="hs-admin-check-box" style="color:#fff !important;"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#d9534f;color:#fff !important;margin-left:3px;border-color:#d9534f;"> <a href="#!"><i class="hs-admin-close" style="color:#fff !important;"></i></a></span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Gas Laws</td>
                    <td>is simply dummy text of the printing and typesetting industry. Lorem Ipsum</td>
                    
                    <td>
                     <span class="u-tags-v1 text-center g-width-110 g-brd-around g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-py-4 g-px-15">Completed</span>
                    </td>
                    <td>
                      <span class="btn btn-info g-rounded-50" style="background:#f4f4f4;color:#000;border-color:#f4f4f4;"> <a href="#!"><i class="hs-admin-download"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#5bc0de;color:#fff !important;margin-left:3px;border-color:#5bc0de;"> <a href="#!"><i class="hs-admin-check-box" style="color:#fff !important;"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#d9534f;color:#fff !important;margin-left:3px;border-color:#d9534f;"> <a href="#!"><i class="hs-admin-close" style="color:#fff !important;"></i></a></span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sepration Techniques</td>
                    <td>is simply dummy text of the printing and typesetting industry. Lorem Ipsum</td>
                    
                    <td>
                      <span class="u-tags-v1 text-center g-width-110 g-brd-around g-brd-primary g-bg-primary g-font-weight-400 g-color-white g-rounded-50 g-py-4 g-px-15">To-do</span>
                    </td>
                    <td>
                      <span class="btn btn-info g-rounded-50" style="background:#f4f4f4;color:#000;border-color:#f4f4f4;"> <a href="#!"><i class="hs-admin-download"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#5bc0de;color:#fff !important;margin-left:3px;border-color:#5bc0de;"> <a href="#!"><i class="hs-admin-check-box" style="color:#fff !important;"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#d9534f;color:#fff !important;margin-left:3px;border-color:#d9534f;"> <a href="#!"><i class="hs-admin-close" style="color:#fff !important;"></i></a></span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Boyle's Law</td>
                    <td>is simply dummy text of the printing and typesetting industry. Lorem Ipsum</td>
                    
                    <td>
                      <span class="u-tags-v1 text-center g-width-110 g-brd-around g-brd-primary g-bg-primary g-font-weight-400 g-color-white g-rounded-50 g-py-4 g-px-15">To-do</span>
                    </td>
                    <td>
                      <span class="btn btn-info g-rounded-50" style="background:#f4f4f4;color:#000;border-color:#f4f4f4;"> <a href="#!"><i class="hs-admin-download"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#5bc0de;color:#fff !important;margin-left:3px;border-color:#5bc0de;"> <a href="#!"><i class="hs-admin-check-box" style="color:#fff !important;"></i></a></span>
                      <span class="btn btn-info g-rounded-50" style="background:#d9534f;color:#fff !important;margin-left:3px;border-color:#d9534f;"> <a href="#!"><i class="hs-admin-close" style="color:#fff !important;"></i></a></span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Charlse Law</td>
                    <td>is simply dummy text of the printing and typesetting industry. Lorem Ipsum</td>
                    
                    <td>
                      <span class="u-tags-v1 text-center g-width-110 g-brd-around g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-py-4 g-px-15">Completed</span>
                    </td>
                    <td>
              <span class="btn btn-info g-rounded-50" style="background:#f4f4f4;color:#000;border-color:#f4f4f4;"> <a href="#!"><i class="hs-admin-download"></i></a></span>
              <span class="btn btn-info g-rounded-50" style="background:#5bc0de;color:#fff !important;margin-left:3px;border-color:#5bc0de;"> <a href="#!"><i class="hs-admin-check-box" style="color:#fff !important;"></i></a></span>
              <span class="btn btn-info g-rounded-50" style="background:#d9534f;color:#fff !important;margin-left:3px;border-color:#d9534f;"> <a href="#!"><i class="hs-admin-close" style="color:#fff !important;"></i></a></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
</template>
<script>
  export default {
    name:"SubjectComponent"
  };
</script>
