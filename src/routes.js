import Vue from 'vue'
import VueRouter from 'vue-router'


import Dashboard from '@/views/Dashboard'
import Profile from '@/views/Profile'
import Interest from '@/views/Interest'
import Portfolio from '@/views/Portfolio'
import Transaction from '@/views/Transaction'
import PaymentMethods from '@/views/PaymentMethods'
import Photo from '@/views/Photo'
import Projects from '@/views/Projects'

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
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})
  