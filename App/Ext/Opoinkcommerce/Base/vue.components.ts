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
