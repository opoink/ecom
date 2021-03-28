import VRouter from './../../../node/src/core/VueRouter';


/** admin routes */
const AdminUserLogin = () => import(/* webpackChunkName: "AdminUserLoginComponent" */ './View/vue/components/admin/pages/AdminUserLogin/AdminUserLogin.component');

let routes = [
    { path: '/backoffice/user/login', component: AdminUserLogin },
]

routes.forEach(route => {
    VRouter.addRoute(route);
});