<template>
     <div class="col-md-9">
                <div class="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                  <header>
                    <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">Yours Interests</h2>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md">

                  <form>
                    <label class="g-mb-15">Select Interests</label>

                    <div class="form-group g-pos-rel g-overflow-hidden g-brd-around g-brd-gray-light-v7 mb-0">
                      <select class="js-multi-select" multiple="multiple" data-multiselect-class="u-multi-select--v1 u-multi-select--items-icons u-multi-select--items-lg u-multi-select--rounded-0 g-ma-minus-1" data-multiselect-divider='<span class="g-absolute-centered--md d-block text-center g-font-size-18 g-color-gray-dark-v9 g-my-15 g-mt-25--md g-mb-0--md"><i class="g-pos-rel g-top-8 g-left-minus-3 hs-admin-arrow-left"></i><i class="g-pos-rel g-top-1 g-right-3 hs-admin-arrow-right"></i></span>'>
                        <option value="listItem1">Design</option>
                        <option value="listItem2">Development</option>
                        <option value="listItem3">Advertising</option>
                        <option value="listItem4">Lifestyle</option>
                        <option value="listItem5">Technology</option>
                        <option value="listItem6">Sports</option>
                        <option value="listItem7">Beauty &amp; Fashion</option>
                        <option value="listItem8" selected="selected">Html &amp; Css</option>
                        <option value="listItem9" selected="selected">JavaScript</option>
                        <option value="listItem10" selected="selected">C#</option>
                        <option value="listItem11" selected="selected">Ruby on Rails</option>
                        <option value="listItem12" selected="selected">Swift</option>
                        <option value="listItem13" selected="selected">Python</option>
                        <option value="listItem14" selected="selected">PHP</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
</template>
<script>
export default {
    name:"Interest"
}
</script>