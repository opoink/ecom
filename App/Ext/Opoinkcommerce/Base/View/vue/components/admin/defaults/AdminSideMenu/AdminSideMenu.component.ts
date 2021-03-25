declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminSideMenu from './AdminSideMenu';
import './AdminSideMenu.scss';

let name = 'vue-adminsidemenu';
let tpl = injector.inject(require('./AdminSideMenu.html'), name);

let AdminSideMenuComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminSideMenu
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminSideMenuComponent;