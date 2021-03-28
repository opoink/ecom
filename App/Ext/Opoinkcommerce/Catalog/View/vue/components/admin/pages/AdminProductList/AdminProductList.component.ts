declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminProductList from './AdminProductList';
import './AdminProductList.scss';

let name = 'vue-adminproductlist';
let tpl = injector.inject(require('./AdminProductList.html'), name);

let AdminProductListComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminProductList
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminProductListComponent;