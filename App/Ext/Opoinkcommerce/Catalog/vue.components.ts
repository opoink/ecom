import Vue from './../../../node/node_modules/vue/dist/vue.min';


/**** ProductSearch ****/
Vue.component('productsearch', function (resolve, reject) {
	import(/* webpackChunkName: "ProductSearchComponent" */ './View/vue/components/pages/ProductSearch/ProductSearch.component')
	.then(component => {resolve(component)});
});
/**** ProductSearch ****/

/**** CategoryLarge ****/
Vue.component('categorylarge', function (resolve, reject) {
	import(/* webpackChunkName: "CategoryLargeComponent" */ './View/vue/components/defaults/CategoryLarge/CategoryLarge.component')
	.then(component => {resolve(component)});
});
/**** CategoryLarge ****/
