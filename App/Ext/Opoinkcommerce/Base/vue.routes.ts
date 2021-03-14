import VRouter from './../../../node/src/core/VueRouter';

const HomeComponent = () => import(/* webpackChunkName: "HomeComponent" */ './View/vue/components/pages/Home/Home.component');

let routes = [
    { path: '/', component: HomeComponent }
]

routes.forEach(route => {
    VRouter.addRoute(route);
});