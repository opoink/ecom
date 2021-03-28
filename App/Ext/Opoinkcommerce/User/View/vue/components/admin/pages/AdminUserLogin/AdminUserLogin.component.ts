declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminUserLogin from './AdminUserLogin';
import './AdminUserLogin.scss';

let name = 'vue-adminuserlogin';
let tpl = injector.inject(require('./AdminUserLogin.html'), name);

let AdminUserLoginComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminUserLogin
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminUserLoginComponent;