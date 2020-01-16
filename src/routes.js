import Vue from 'vue'
import VueRouter from 'vue-router'


import Dashboard from '@/views/Dashboard'
// import Profile from '@/views/Profile'
import Interest from '@/views/Interest'
import Portfolio from '@/views/Portfolio'
import Transaction from '@/views/Transaction'
import PaymentMethods from '@/views/PaymentMethods'
import Photo from '@/views/Photo'
import Projects from '@/views/Projects'
import ChangePassword from '@/views/ChangePassword'
import Profile from '@/views/Profile'
import EditProfile from '@/views/EditProfile'
import Notification from '@/views/Notification'

import Newuser from '@/views/Newuser'
import Allusers from '@/views/Allusers'
import Bankdetails from '@/views/Bankdetails'
import Newnotification from '@/views/Newnotification'
import Allnotification from '@/views/Allnotification'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard

        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/edit-profile',
            name: 'EditProfile',
            component: EditProfile
        },
        {
            path: '/Interest',
            name: 'Interest',
            component: Interest
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/transaction',
            name: 'Transaction',
            component: Transaction
        },
        {
            path: '/payment-methods',
            name: 'PaymentMethods',
            component: PaymentMethods
        },
        {
            path: '/upload-profile-photo',
            name: 'Photo',
            component: Photo
        },
        {
            path: '/all-projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/change-password',
            name: 'ChangePassword',
            component: ChangePassword
        },
        {
            path: '/newuser',
            name: 'Newuser',
            component: Newuser
        },
        {
            path: '/allusers',
            name: 'Allusers',
            component: Allusers
        },
        {
            path: '/bankdetails',
            name: 'Bankdetails',
            component: Bankdetails
        },
        {
            path: '/notification',
            name: 'Notification',
            component: Notification
        },
        {
            path: '/newnotification',
            name: 'Newnotification',
            component: Newnotification
        },
        {
            path: '/allnotification',
            name: 'Allnotification',
            component: Allnotification
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})
  