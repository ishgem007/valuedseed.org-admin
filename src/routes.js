import Vue from 'vue'
import * as cookies from './cookies'
import VueRouter from 'vue-router'
import store from './store'

import Dashboard from '@/views/Dashboard'
// import Profile from '@/views/Profile'

import Portfolio from '@/views/Portfolio'
import Transaction from '@/views/Transaction'
import PaymentMethods from '@/views/PaymentMethods'
import Photo from '@/views/Photo'
import Projects from '@/views/Projects'
import ChangePassword from '@/views/ChangePassword'
import Profile from '@/views/Profile'
import EditProfile from '@/views/EditProfile'
import Notification from '@/views/Notification'
import Teachers from '@/views/Teachers'
import Subject from '@/views/Subject'
import Chapter from '@/views/Chapter'
import SubjectByTeacher from '@/views/SubjectByTeacher'
import CompletedSubject from '@/views/CompletedSubject'
import OngoingSubject from '@/views/OngoingSubject'
import Store from '@/views/Store'

import Newuser from '@/views/Newuser'
import Allusers from '@/views/Allusers'
import Bankdetails from '@/views/Bankdetails'
import Newnotification from '@/views/Newnotification'
import Allnotification from '@/views/Allnotification'

Vue.use(cookies)
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                if(cookies.authenticated === 'true' || store.state.auth.authenticated === 'true') {
                    next()
                }else{ 
                    next(from)
                }
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false') {
                    next(from)
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/edit-profile',
            name: 'EditProfile',
            component: EditProfile,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false') {
                    next('/')
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false' || store.state.auth.role === 'teacher') {
                    next(from)
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/transaction',
            name: 'Transaction',
            component: Transaction,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false' || store.state.auth.role === 'teacher') {
                    next(from)
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/payment-methods',
            name: 'PaymentMethods',
            component: PaymentMethods,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/upload-profile-photo',
            name: 'Photo',
            component: Photo,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false') {
                    next('/')
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/all-projects',
            name: 'Projects',
            component: Projects,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false' || store.state.auth.role === 'teacher') {
                    next(from)
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/change-password',
            name: 'ChangePassword',
            component: ChangePassword,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false') {
                    next('/')
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/newuser',
            name: 'Newuser',
            component: Newuser,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/allusers',
            name: 'Allusers',
            component: Allusers,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/bankdetails',
            name: 'Bankdetails',
            component: Bankdetails,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false' || store.state.auth.role === 'teacher') from
                else next()
            }
        },
        {
            path: '/notification',
            name: 'Notification',
            component: Notification,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {

            path: '/newnotification',
            name: 'Newnotification',
            component: Newnotification,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/allnotification',
            name: 'Allnotification',
            component: Allnotification,
            beforeEnter: (to, from, next) => {
                if(store.state.auth.authenticated === 'false') {
                    next('/')
                }else{ 
                    next()
                }
            }
        },
        {
            path: '/all-teachers',
            name: 'Teachers',
            component: Teachers,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/for-single-subject',
            name: 'Subject',
            component: Subject,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/all-subtopics',
            name: 'Chapter',
            component: Chapter,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/subjects-and-teacher',
            name: 'SubjectByTeacher',
            component: SubjectByTeacher,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/completed-subjects',
            name: 'CompletedSubject',
            component: CompletedSubject,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/ongoing-subjects',
            name: 'OngoingSubject',
            component: OngoingSubject,
            beforeEnter: (to, from, next) => {
                
            }
        },
        {
            path: '/store',
            name: 'Store',
            component: Store,
            beforeEnter: (to, from, next) => {
                
            }
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})
  