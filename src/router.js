import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './components/HelloWorld.vue'
import SignupPage from './pages/Signup.vue'
import LoginPage from './pages/Login.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/signup', component: SignupPage },
        { path: '/login', component: LoginPage},

        { path: '*', component: HomePage }
    ]
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not loggedin
    const publicPages = ['/login', '/signup']
    const authRequired = !publicPages.includes(to.path)

    // TODO: Implement logged in check.
    if (authRequired) {
        return next('/login')
    }

    next()
})
