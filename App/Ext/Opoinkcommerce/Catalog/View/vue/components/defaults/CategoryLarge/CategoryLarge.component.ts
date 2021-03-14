declare function require(name:string);
import Vue from './../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../node/src/core/dom';
import CategoryLarge from './CategoryLarge';
import './CategoryLarge.scss';

let name = 'categorylarge';
let tpl = injector.inject(require('./CategoryLarge.html'), name);

let CategoryLargeComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: CategoryLarge
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default CategoryLargeComponent;