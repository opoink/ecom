declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminMenuCatalog from './AdminMenuCatalog';
import './AdminMenuCatalog.scss';

let name = 'vue-adminmenucatalog';
let tpl = injector.inject(require('./AdminMenuCatalog.html'), name);

let AdminMenuCatalogComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminMenuCatalog
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminMenuCatalogComponent;