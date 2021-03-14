declare function require(name:string);
import Vue from './../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../node/src/core/dom';
import DefaultFooter from './DefaultFooter';
// import './DefaultFooter.scss';

let name = 'defaultfooter';
let tpl = injector.inject(require('./DefaultFooter.html'), name);

let DefaultFooterComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: DefaultFooter
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default DefaultFooterComponent;