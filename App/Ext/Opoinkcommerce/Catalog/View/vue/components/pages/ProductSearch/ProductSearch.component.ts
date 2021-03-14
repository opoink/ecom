declare function require(name:string);
import Vue from './../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../node/src/core/dom';
import ProductSearch from './ProductSearch';
// import './ProductSearch.scss';

let name = 'productsearch';
let tpl = injector.inject(require('./ProductSearch.html'), name);

let ProductSearchComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: ProductSearch
        }
    },
    beforeMount: (f) => {
        ProductSearch.init();
    },
    watch: {
        $route(to, from) {
            if(typeof to.query['search'] != 'undefined'){
                this.vue.init(to, from);
            }
        }
    },
    template: tpl
});
export default ProductSearchComponent;