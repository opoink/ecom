import VRouter from './../../../node/src/core/VueRouter';

const ProductSearch = () => import(/* webpackChunkName: "ProductSearch" */ './View/vue/components/pages/ProductSearch/ProductSearch.component');

let routes = [
    { path: '/products', component: ProductSearch },
    { path: '/products/:search', component: ProductSearch }
]

routes.forEach(route => {
    VRouter.addRoute(route);
});