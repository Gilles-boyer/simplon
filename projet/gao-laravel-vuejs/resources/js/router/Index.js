import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../view/Home';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        // otherwise redirect to home
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router