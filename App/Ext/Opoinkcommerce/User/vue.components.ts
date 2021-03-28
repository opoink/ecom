import Vue from './../../../node/node_modules/vue/dist/vue.min';


/**** AdminUserLogin ****/
Vue.component('adminuserlogin', function (resolve, reject) {
	import(/* webpackChunkName: "AdminUserLoginComponent" */ './View/vue/components/admin/pages/AdminUserLogin/AdminUserLogin.component')
	.then(component => {resolve(component)});
});
/**** AdminUserLogin ****/
