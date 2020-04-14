import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Product from './components/Product';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product,
            props: true
        }
    ]
})