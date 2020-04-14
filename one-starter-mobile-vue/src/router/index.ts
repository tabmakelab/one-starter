import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
    },
    {
        path: '/me',
        name: 'Me',
        component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
    },
    {
        path: '/movie-detail',
        name: 'MovieDetail',
        meta: {
            hideTab: true
        },
        component: () => import(/* webpackChunkName: "me" */ '../views/MovieDetail.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            hideTab: true
        },
        component: () => import(/* webpackChunkName: "me" */ '../views/Login.vue')
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log('from', from)
    console.log('to', to)
    console.log('token', localStorage.getItem('_ONE_START_TOKEN_'))
    if (localStorage.getItem('_ONE_START_TOKEN_') === null && to.name !== 'Login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

export default router
