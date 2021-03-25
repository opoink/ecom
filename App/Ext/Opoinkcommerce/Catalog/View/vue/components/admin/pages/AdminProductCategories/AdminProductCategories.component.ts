declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminProductCategories from './AdminProductCategories';
import './AdminProductCategories.scss';

let name = 'vue-adminproductcategories';
let tpl = injector.inject(require('./AdminProductCategories.html'), name);

let AdminProductCategoriesComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminProductCategories
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminProductCategoriesComponent;