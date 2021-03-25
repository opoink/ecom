import VRouter from './../../../node/src/core/VueRouter';

const ProductSearch = () => import(/* webpackChunkName: "ProductSearch" */ './View/vue/components/pages/ProductSearch/ProductSearch.component');

/** admin routes */
const AdminProductCategories = () => import(/* webpackChunkName: "AdminProductCategories" */ './View/vue/components/admin/pages/AdminProductCategories/AdminProductCategories.component');

let routes = [
    { path: '/backoffice/catalog/categories', component: AdminProductCategories },
    { path: '/products', component: ProductSearch },
    { path: '/products/:search', component: ProductSearch }
]

routes.forEach(route => {
    VRouter.addRoute(route);
});