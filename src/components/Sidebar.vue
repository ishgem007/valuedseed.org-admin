<template>
    <!-- Sidebar Nav -->
        <div id="sideNav" class="col-auto u-sidebar-navigation-v1 u-sidebar-navigation--light">
        <ul id="sideNavMenu" class="u-sidebar-navigation-v1-menu u-side-nav--top-level-menu g-min-height-100vh mb-0">
                <!-- Dashboard -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
                <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="/">
                        <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                  <i class="hs-admin-dashboard"></i>
                </span>
                        <span class="media-body align-self-center">Dashboard</span>
                  </a>
              </li>
          <!-- End Dashboard -->

              
            <!-- Profile -->
            
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened" >
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#" data-hssm-target="#subMenu1">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-user"></i>
            </span>
                  <span class="media-body align-self-center">Profile</span>
                  <span class="d-flex align-self-center u-side-nav--control-icon">
              <i class="hs-admin-angle-right"></i>
            </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>

              <!-- Personal information: Submenu-1 -->
              <ul id="subMenu1" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: none;">
                <!-- Personal information u-side-nav-opened-->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/profile">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                <i class="hs-admin-id-badge"></i>
              </span>
                    <span class="media-body align-self-center">Personal information</span>
                  </a>
                </li>
                <!-- End Personal information -->

                <!-- Portofolio -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/portfolio">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-star"></i>
                </span>
                    <span class="media-body align-self-center">Portfolio</span>
                  </a>
                </li>
                <!-- End Portofolio -->

            
          
                  <!-- Photo -->
                        <!-- End Photo -->
                
                <!-- Payment Details -->
                <!-- userdata.role === 'teacher' -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item" v-if="userdata.role === 'teacher'">
                          <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/payment-methods">
                            <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-wallet"></i>
                </span>
                    <span class="media-body align-self-center">Account Details</span>
                          </a>
                </li>
              </ul>
              <!-- End Dashboards: Submenu-1 -->
            </li>
              <!-- userdata.role === 'admin' -->
             <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item" v-if="userdata.role === 'admin'">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#" data-hssm-target="#subMenu1">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                  <i class="hs-admin-user"></i>
                </span>
                <span class="media-body align-self-center">User Management</span>
                <span class="d-flex align-self-center u-side-nav--control-icon">
                  <i class="hs-admin-angle-right"></i>
                </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>
              <ul id="subMenu1" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: block;">
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/newuser">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                      <i class="hs-admin-pencil-alt"></i>
                    </span>
                    <span class="media-body align-self-center">New User</span>
                  </a>
                </li>
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/allusers">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                      <i class="hs-admin-notepad"></i>
                    </span>
                    <span class="media-body align-self-center">View User</span>
                  </a>
                </li>
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/bankdetails">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                      <i class="hs-admin-credit-card"></i>
                    </span>
                    <span class="media-body align-self-center">Bank Details</span>
                  </a>
                </li>
              </ul>
            </li>
      
              <!-- End Profile -->
              <!-- userdata.role === 'admin' -->
              <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item" v-if="userdata.role === 'admin'">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="/all-teachers">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-user"></i>
                </span>
                    <span class="media-body align-self-center">Teachers</span>
                          </a>
                </li>
              <!-- Projects -->
              <!-- userdata.role === 'teacher' -->
                  <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item" v-if="userdata.role === 'teacher'">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="/all-projects">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-notepad"></i>
              </span>
                      <span class="media-body align-self-center">Subject and Chapters</span>
                    </a>
                  </li>
<!-- userdata.role === 'admin' -->
                  <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item" v-if="userdata.role === 'admin'">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="/subjects-and-teacher">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-notepad"></i>
              </span>
                      <span class="media-body align-self-center">Subjects </span>
                    </a>
                  </li>
                  <!-- End Projects  -->
                    
            <!-- Metrics -->
            <!-- <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-pie-chart"></i>
            </span>
                <span class="media-body align-self-center">Metrics</span>
              </a>
            </li> -->
            <!-- End Metrics -->
              <!-- manage subject -->
              <!-- userdata.role === 'admin' -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened" v-if="userdata.role === 'admin'">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#!" data-hssm-target="#subMenu3">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-pencil-alt"></i>
            </span>
                  <span class="media-body align-self-center">Manage Subjects</span>
                  <span class="d-flex align-self-center u-side-nav--control-icon">
              <i class="hs-admin-angle-right"></i>
            </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>

              <!-- Personal information: Submenu-1 -->
              <ul id="subMenu3" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: none;">
                <!-- Personal information u-side-nav-opened-->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/completed-subjects">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                <i class="hs-admin-angle-right"></i>
              </span>
                    <span class="media-body align-self-center">Completed Subjects</span>
                  </a>
                </li>
                <!-- End Personal information -->

                <!-- Ongoing -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/ongoing-subjects">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-angle-right"></i>
                </span>
                    <span class="media-body align-self-center">Ongoing Subjects</span>
                  </a>
                </li>
                <!-- End Ongoing -->   

                <!-- Ongoing -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/Ongoing">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-angle-right"></i>
                </span>
                    <span class="media-body align-self-center">Empty Subjects</span>
                  </a>
                </li>
                <!-- End Ongoing -->     
              </ul>
              <!-- End Dashboards: Submenu-1 -->
            </li>
            <!-- manage products-->
            <!-- userdata.role === 'admin' -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened" v-if="userdata.role === 'admin'">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#!" data-hssm-target="#subMenu4">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-view-list"></i>
            </span>
                  <span class="media-body align-self-center">Manage Products</span>
                  <span class="d-flex align-self-center u-side-nav--control-icon">
              <i class="hs-admin-angle-right"></i>
            </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>

              <!-- Personal information: Submenu-1 -->
              <ul id="subMenu4" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: none;">

                <!-- Personal information u-side-nav-opened-->
                <!-- <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/create-products">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                <i class="hs-admin-plus"></i>
              </span>
                    <span class="media-body align-self-center">Add Product</span>
                  </a>
                </li> -->


                <!-- End Personal information -->  

                <!-- Ongoing -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/store">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-view-list-alt"></i>
                </span>
                    <span class="media-body align-self-center">Store</span>
                  </a>
                </li>
                <!-- End Ongoing -->     
              </ul>
              <!-- End Dashboards: Submenu-1 -->
            </li>
            <!-- userdata.role === 'admin' -->
              <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened" v-if="userdata.role === 'admin'">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#" data-hssm-target="#subMenu1">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                  <i class="hs-admin-bell"></i>
                </span>
                <span class="media-body align-self-center">Notification</span>
                <span class="d-flex align-self-center u-side-nav--control-icon">
                  <i class="hs-admin-angle-right"></i>
                </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>
              <ul id="subMenu1" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: block;">
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/newnotification">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                      <i class="hs-admin-comment"></i>
                    </span>
                    <span class="media-body align-self-center">New Notification</span>
                  </a>
                </li>
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/allnotification">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                      <i class="hs-admin-list"></i>
                    </span>
                    <span class="media-body align-self-center">Notifiction log</span>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Others -->
            
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#!" data-hssm-target="#subMenu2">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-settings"></i>
            </span>
                  <span class="media-body align-self-center">Other</span>
                  <span class="d-flex align-self-center u-side-nav--control-icon">
              <i class="hs-admin-angle-right"></i>
            </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </a>

              <!-- Personal information: Submenu-1 -->
              <ul id="subMenu2" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: none;">
                <!-- Personal information u-side-nav-opened-->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/change-password">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                <i class="hs-admin-lock"></i>
              </span>
                    <span class="media-body align-self-center">Change Password</span>
                  </a>
                </li>
                <!-- End Personal information -->

                <!-- logout -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <a class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" href="/logout">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-power-off"></i>
                </span>
                    <span class="media-body align-self-center">Logout</span>
                  </a>
                </li>
                <!-- End logout -->       
              </ul>
              <!-- End Dashboards: Submenu-1 -->
            </li>

         </ul>
      </div>
      <!-- End Sidebar Nav -->
</template>
<script>
export default {
    name:"Sidebar",
    computed:{
        userdata(){
          return this.$store.getters.getUserData
        }
    },
    mounted(){
    
    }
}
</script>