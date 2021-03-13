import Vue from './../../../node/node_modules/vue/dist/vue.min';


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
