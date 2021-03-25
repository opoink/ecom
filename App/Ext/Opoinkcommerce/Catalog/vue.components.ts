import Vue from './../../../node/node_modules/vue/dist/vue.min';


/**** ProductSearch ****/
Vue.component('vue-productsearch', function (resolve, reject) {
	import(/* webpackChunkName: "ProductSearchComponent" */ './View/vue/components/pages/ProductSearch/ProductSearch.component')
	.then(component => {resolve(component)});
});
/**** ProductSearch ****/

/**** CategoryLarge ****/
Vue.component('vue-categorylarge', function (resolve, reject) {
	import(/* webpackChunkName: "CategoryLargeComponent" */ './View/vue/components/defaults/CategoryLarge/CategoryLarge.component')
	.then(component => {resolve(component)});
});
/**** CategoryLarge ****/

/**** AdminMenuCatalog ****/
Vue.component('vue-adminmenucatalog', function (resolve, reject) {
	import(/* webpackChunkName: "AdminMenuCatalogComponent" */ './View/vue/components/admin/defaults/AdminMenuCatalog/AdminMenuCatalog.component')
	.then(component => {resolve(component)});
});
/**** AdminMenuCatalog ****/

/**** AdminProductCategories ****/
Vue.component('vue-adminproductcategories', function (resolve, reject) {
	import(/* webpackChunkName: "AdminProductCategoriesComponent" */ './View/vue/components/admin/pages/AdminProductCategories/AdminProductCategories.component')
	.then(component => {resolve(component)});
});
/**** AdminProductCategories ****/
