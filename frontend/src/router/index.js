import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/articles',
    name: 'Articles',
    component: () => import('../components/Articles.vue')
}, {
    path:'/users/myprofile',
    name: 'UserProfil',
    component: () => import('../components/UserProfil.vue')
}, {
    path:'',
    name: 'LoginUser',
    component: () => import('../components/LoginUser.vue')
}, {
    path:'/users/signup',
    name: 'SignupUser',
    component: () => import('../components/SignupUser.vue')
}, {
    path:'/new/',
    name: 'NewArticle',
    component: () => import('../components/NewArticle.vue')
}, {
   path:'/articles/:id',
   name: 'Article',
   component: () => import('../components/Article.vue')
}, {
    path:'/articles/edit/:id',
    name: 'UpdateArticle',
    component: () => import('../components/UpdateArticle.vue')
}, {
    path:'/users/edit/:id',
    name: 'UpdateUser',
    component: () => import('../components/UpdateUser.vue')
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;