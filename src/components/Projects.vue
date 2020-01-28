<template>
        <div class="row">
    <!-- Projects Card -->
            <div class="col-xl-12">
              <!-- Projects Card -->
              <div class="card g-brd-gray-light-v7 u-card-v1 g-pa-15 g-pa-25-30--md g-mb-30">
                <div class="g-pa-20">
            <div class="media">
              <div class="d-flex align-self-center">
                <h1 class="g-font-weight-300 g-font-size-28 g-color-black mb-0">Subject - Chapters</h1>
              </div>

              <div class="media-body align-self-center text-right">
                <a class="js-fancybox btn btn-xl u-btn-secondary g-width-160--md g-font-size-default g-ml-10" href="#!" data-src="#new-project-form" data-speed="350" data-options='{"touch" : false}'>New Chapter
              </a>
              </div>
            </div>

            <hr class="d-flex g-brd-gray-light-v7 g-my-30">

            <div class="media g-mb-30">
              <div class="d-flex align-self-center align-items-center">
                <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-12">Status:</span>

                <div class="u-select--v1 g-pr-20">
                  <div class="btn-group bootstrap-select js-select u-select--v1-select w-100"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="In Progress"><span class="filter-option pull-left"></span>
                    <span class="d-flex align-items-center">
                      <span class="bs-caret"><span class="caret"></span></span></span></button>
                      <div class="dropdown-menu open" role="combobox">
                        <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                          <li data-original-index="0" class="selected">
                            <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true">
                              <span class="d-flex align-items-center">
                                <span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightblue-v3 g-mr-8--sm">
                                  </span><span class="g-hidden-sm-down g-line-height-1_2 g-color-black">In Progress</span></span>
                              <span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1">
                                <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                  <span class="d-flex align-items-center">
                                    <span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-teal-v2 g-mr-8--sm"></span>
                                    <span class="g-hidden-sm-down g-line-height-1_2 g-color-black">Pending</span></span>
                                    <span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                                    <li data-original-index="2">
                                      <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                        <span class="d-flex align-items-center">
                                          <span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightred-v2 g-mr-8--sm"></span>
                                          <span class="g-hidden-sm-down g-line-height-1_2 g-color-black">Done</span></span>
                                          <span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                                          <li data-original-index="3">
                                            <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                              <span class="d-flex align-items-center">
                                                <span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-gray-light-v6 g-mr-8--sm"></span>
                                                <span class="g-hidden-sm-down g-line-height-1_2 g-color-black">Archive</span></span>
                                                <span class="glyphicon glyphicon-ok check-mark"></span></a>
                                              </li>
                                              </ul>
                                              </div>
                                              <select class="js-select u-select--v1-select w-100" style="display: none;" tabindex="-98">
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightred-v2 g-mr-8--sm&quot;></span><span class=&quot;g-hidden-sm-down g-line-height-1_2 g-color-black&quot;>Done</span></span>">Done</option>
                   
                  </select></div>
                  <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto"></i>
                </div>
              </div>

             

              <div class="media-body align-self-center g-ml-10 g-ml-0--md">
                <div class="input-group g-pos-rel g-max-width-380 float-right">
                  <input class="form-control g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10" type="text" placeholder="Search for Chapters">
                  <button class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0" type="submit">
                    <i class="hs-admin-search g-absolute-centered"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 g-mb-30" v-for="(topic,index) in this.$store.state.topics" :key="index">
                <div class="card h-100 g-brd-gray-light-v7 rounded" >
                  <header class="card-header g-bg-transparent g-brd-bottom-none g-pa-20 g-pa-30--sm">
                    <div class="media g-mb-15">
                      <div class="d-flex align-self-center">Chapter {{index + 1}}</div>

                      <div class="media-body d-flex justify-content-end">
                        <div class="g-pos-rel g-z-index-2">
                          <a id="dropDown1Invoker" class="u-link-v5 g-line-height-0 g-font-size-24 g-color-gray-light-v6 g-color-secondary--hover" href="#!" aria-controls="dropDown1" aria-haspopup="true" aria-expanded="false" data-dropdown-event="click" :data-dropdown-target="'#dropDown'+index + 1" data-dropdown-type="jquery-slide">
                            <i class="hs-admin-more-alt g-ml-20"></i>
                          </a>

                          <div :id="'dropDown'+index + 1" class="u-shadow-v31 g-pos-abs g-right-0 g-bg-white u-dropdown--jquery-slide u-dropdown--hidden" aria-labelledby="dropDown1Invoker" style="display: none;">
                            <ul class="list-unstyled g-nowrap mb-0">
                              <li>
                                <a class="d-flex align-items-center js-fancybox u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14" href="#!" data-src="#edit-form">
                                  <i class="hs-admin-pencil g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14" href="#!">
                                  <i class="hs-admin-trash g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 class="g-font-weight-300 g-font-size-20 g-color-black g-mb-15"> {{topic.title.slice(0, Math.floor(Math.random() * 20)+5)}}</h3>
                    <span class="u-tags-v1 text-center g-width-130 g-brd-around g-brd-lightblue-v3 g-bg-lightblue-v3 g-color-white g-rounded-50 g-py-4 g-px-15" v-if="topic.active">In Progress</span>
                  </header>
                    <span class="u-tags-v1 text-center g-width-130 g-brd-around g-brd-primary g-bg-primary g-color-white g-rounded-50 g-py-4 g-px-15" v-if="!topic.active">Decline</span>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-mx-20 g-mx-30--sm my-0">

                  <div class="card-block d-flex justify-content-between g-px-20 g-px-30--sm g-py-15 g-py-20--sm">
                    <div>
                      <h4 class="g-line-height-1_2 g-font-weight-300 g-font-size-28 g-color-black">25</h4>
                      <em class="g-font-style-normal g-font-weight-300 g-font-size-16 g-color-gray-dark-v6">Q/A</em>
                    </div>

                    <div>
                      <h4 class="g-line-height-1_2 g-font-weight-300 g-font-size-28 g-color-black">23</h4>
                      <em class="g-font-style-normal g-font-weight-300 g-font-size-16 g-color-gray-dark-v6">Videos</em>
                    </div>

                    <div>
                      <h4 class="g-line-height-1_2 g-font-weight-300 g-font-size-28 g-color-black">7</h4>
                      <em class="g-font-style-normal g-font-weight-300 g-font-size-16 g-color-gray-dark-v6">Quiz</em>
                    </div>
                  </div>
                  <hr class="d-flex g-brd-gray-light-v7 g-mx-20 g-mx-30--sm my-0">

                  <div class="card-block g-px-20 g-px-30--sm g-py-10 g-py-15--sm">
                    <div class="media align-self-center g-mb-5">
                      <div class="d-flex g-width-100 g-font-weight-300 g-color-gray-dark-v10">Content Upload</div>

                      <div class="media-body align-self-center">
                        <div class="progress g-height-4 g-rounded-2">
                          <div class="progress-bar g-bg-lightblue-v3 g-rounded-2" role="progressbar" style="width: topic.file == null ? '0%' : '100%'" aria-valuenow="topic.file == null ? '0%' : '100%'" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div class="d-flex align-self-center justify-content-end g-font-weight-300 g-color-black g-width-40">{{topic.file == null ? '0%' : '100%'}}</div>
                    </div>
                  </div>

                  <hr class="d-flex g-brd-gray-light-v7 g-mx-20 g-mx-30--sm my-0">

                  <div class="card-block g-px-20 g-px-30--sm g-py-15 g-py-20--sm">
                    <div class="row g-mb-25">
                      <div class="col-md-6 g-mb-25 g-mb-0--md">
                        <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">Last Updated</h5>
                        <p class="g-color-black mb-0">{{topic.created_at}}</p>
                      </div>

                      <div class="col-md-6">
                        <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">Video Length</h5>
                        <p class="g-color-black mb-0">{{Math.floor(Math.random() * 10)}}h
                          <span class="g-hidden-md-down">{{Math.floor(Math.random() * 60)}}min&nbsp;</span>
                          <span class="g-hidden-md-up">.</span>
                        </p>
                      </div>
                    </div>

                    <!-- <div class="g-mb-25">
                      <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">Last edited</h5>
                      <p class="g-color-black mb-0">New design uploaded by Adam</p>
                    </div> -->

                    <!-- <ul class="list-inline mb-0">
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <img class="g-width-40 g-height-40 rounded-circle" src="assets/b-assets/img-temp/100x100/img14.jpg" alt="Image Description">
                      </li>
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <img class="g-width-40 g-height-40 rounded-circle" src="assets/b-assets/img-temp/100x100/img17.jpg" alt="Image Description">
                      </li>
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <div class="d-flex align-items-center justify-content-center g-width-40 g-height-40 g-bg-secondary g-color-white rounded-circle g-pos-rel g-top-1">+4</div>
                      </li>
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <a class="d-flex align-items-center justify-content-center u-link-v5 g-width-40 g-height-40 g-bg-gray-light-v8 g-bg-primary--hover g-color-secondary g-color-white--hover rounded-circle g-pos-rel g-top-1" href="#!">
                          <i class="hs-admin-plus"></i>
                        </a>
                      </li>
                    </ul> -->
                  </div>
                </div>
              </div>     
              <div class="col-md-6 col-lg-4 g-mb-30">
                <a class="js-fancybox d-flex align-items-center justify-content-center u-link-v5 g-parent h-100 g-brd-around g-brd-style-dashed g-brd-gray-light-v7 rounded g-pa-30" href="#!" data-src="#new-project-form" data-speed="350">
                  <span class="text-center">
                  <span class="d-inline-block g-pos-rel g-width-50 g-height-50 g-font-size-default g-color-secondary g-brd-around g-brd-secondary rounded-circle g-mb-5">
                    <i class="hs-admin-plus g-absolute-centered"></i>
                  </span>
                  <span class="d-block g-font-weight-300 g-font-size-16 g-color-gray-dark-v6 g-color-secondary--parent-hover">Start New Project</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

              </div>
              <!-- End Projects Card -->
            </div>
            <!-- End Projects Card -->
        </div>
</template>