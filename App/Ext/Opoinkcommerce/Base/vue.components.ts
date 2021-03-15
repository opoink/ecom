import Vue from './../../../node/node_modules/vue/dist/vue.min';

Vue.filter('capitalized', function (value) {
	if (!value) return '';
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
});

/**** Home ****/
Vue.component('home', function (resolve, reject) {
	import(/* webpackChunkName: "HomeComponent" */ './View/vue/components/pages/Home/Home.component')
	.then(component => {resolve(component)});
});
/**** Home ****/

/**** DefaultHeader ****/
Vue.component('defaultheader', function (resolve, reject) {
	import(/* webpackChunkName: "DefaultHeaderComponent" */ './View/vue/components/defaults/DefaultHeader/DefaultHeader.component')
	.then(component => {resolve(component)});
});
/**** DefaultHeader ****/

/**** DefaultFooter ****/
Vue.component('defaultfooter', function (resolve, reject) {
	import(/* webpackChunkName: "DefaultFooterComponent" */ './View/vue/components/defaults/DefaultFooter/DefaultFooter.component')
	.then(component => {resolve(component)});
});
/**** DefaultFooter ****/

/**** AdminHome ****/
Vue.component('adminhome', function (resolve, reject) {
	import(/* webpackChunkName: "AdminHomeComponent" */ './View/vue/components/admin/pages/AdminHome/AdminHome.component')
	.then(component => {resolve(component)});
});
/**** AdminHome ****/

/**** AdminSideMenu ****/
Vue.component('adminsidemenu', function (resolve, reject) {
	import(/* webpackChunkName: "AdminSideMenuComponent" */ './View/vue/components/admin/defaults/AdminSideMenu/AdminSideMenu.component')
	.then(component => {resolve(component)});
});
/**** AdminSideMenu ****/

/**** AdminMainHeader ****/
Vue.component('adminmainheader', function (resolve, reject) {
	import(/* webpackChunkName: "AdminMainHeaderComponent" */ './View/vue/components/admin/defaults/AdminMainHeader/AdminMainHeader.component')
	.then(component => {resolve(component)});
});
/**** AdminMainHeader ****/
