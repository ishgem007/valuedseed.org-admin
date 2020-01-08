<template>
    <!-- Sidebar Nav -->
        <div id="sideNav" class="col-auto u-sidebar-navigation-v1 u-sidebar-navigation--light">
        <ul id="sideNavMenu" class="u-sidebar-navigation-v1-menu u-side-nav--top-level-menu g-min-height-100vh mb-0">
                <!-- Dashboard -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
                <router-link class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" to="/">
                        <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                  <i class="hs-admin-dashboard"></i>
                </span>
                        <span class="media-body align-self-center">Dashboard</span>
                  </router-link>
              </li>
          <!-- End Dashboard -->

              
            <!-- Profile -->
            
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened">
                    <router-link class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" to="/profile" data-hssm-target="#subMenu1">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-user"></i>
            </span>
                  <span class="media-body align-self-center">Profile</span>
                  <span class="d-flex align-self-center u-side-nav--control-icon">
              <i class="hs-admin-angle-right"></i>
            </span>
                <span class="u-side-nav--has-sub-menu__indicator"></span>
              </router-link>

              <!-- Personal information: Submenu-1 -->
              <ul id="subMenu1" class="u-sidebar-navigation-v1-menu u-side-nav--second-level-menu mb-0" style="display: block;">
                <!-- Personal information u-side-nav-opened-->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <router-link class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" to="/profile">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                <i class="hs-admin-id-badge"></i>
              </span>
                    <span class="media-body align-self-center">Personal information</span>
                  </router-link>
                </li>
                <!-- End Personal information -->

                <!-- Portofolio -->
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                  <router-link class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" to="/portfolio">
                    <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-star"></i>
                </span>
                    <span class="media-body align-self-center">Portfolio</span>
                  </router-link>
                </li>
                <!-- End Portofolio -->

            
          
                  <!-- Photo -->
                        <!-- End Photo -->
                
                <!-- Payment Details -->
                
                <li class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item">
                          <router-link class="media u-side-nav--second-level-menu-link g-px-15 g-py-12" to="/payment-methods">
                            <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                  <i class="hs-admin-wallet"></i>
                </span>
                    <span class="media-body align-self-center">Payment</span>
                          </router-link>
                </li>
                <!-- End Payment -->
        
      
             
              </ul>
              <!-- End Dashboards: Submenu-1 -->
            </li>
      
      
              <!-- End Profile -->
              
              <!-- Projects -->
                  <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
                    <router-link class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" to="/all-projects">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-layout-media-left"></i>
              </span>
                      <span class="media-body align-self-center">Projects </span>
                    </router-link>
                  </li>
                  <!-- End Projects  -->
              
              <!-- Personal Task -->
                  <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
                    <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#">
                      <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
                <i class="hs-admin-pencil-alt"></i>
              </span>
              <span class="media-body align-self-center">Personal Task</span>
            </a>
          </li>
          <!-- End Personal Task -->
      
      
      
            <!-- Metrics -->
            <li class="u-sidebar-navigation-v1-menu-item u-side-nav--top-level-menu-item">
              <a class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12" href="#">
                <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
              <i class="hs-admin-pie-chart"></i>
            </span>
                <span class="media-body align-self-center">Metrics</span>
              </a>
            </li>
            <!-- End Metrics -->

         </ul>
      </div>
      <!-- End Sidebar Nav -->
</template>
<script>
export default {
    name:"Sidebar"
}
</script>