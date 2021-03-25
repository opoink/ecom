import VRouter from './../../../node/src/core/VueRouter';

const HomeComponent = () => import(/* webpackChunkName: "HomeComponent" */ './View/vue/components/pages/Home/Home.component');
const AdminHome = () => import(/* webpackChunkName: "AdminHome" */ './View/vue/components/admin/pages/AdminHome/AdminHome.component');

let routes = [
    { path: '/', component: HomeComponent },
    { path: '/backoffice', component: AdminHome },
    { path: '/backoffice/dashboard', component: AdminHome }
]

routes.forEach(route => {
    VRouter.addRoute(route);
});