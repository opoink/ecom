declare function require(name:string);
import Vue from './../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../node/src/core/dom';
import DefaultHeader from './DefaultHeader';
import './DefaultHeader.scss';

let name = 'defaultheader';
let tpl = injector.inject(require('./DefaultHeader.html'), name);

let DefaultHeaderComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: DefaultHeader
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default DefaultHeaderComponent;