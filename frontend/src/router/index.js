import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/articles',
    name: 'Articles',
    component: () => import('../components/Articles.vue')
}, {
    path:'auth/users/myprofile',
    name: 'UserProfil',
    component: () => import('../components/UserProfil.vue')
}, {
    path:'/auth/login',
    name: 'LoginUser',
    component: () => import('../components/LoginUser.vue')
}, {
    path:'/auth/signup',
    name: 'SignupUser',
    component: () => import('../components/SignupUser.vue')
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;