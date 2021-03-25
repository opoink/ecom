declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminMainHeader from './AdminMainHeader';
import './AdminMainHeader.scss';

let name = 'vue-adminmainheader';
let tpl = injector.inject(require('./AdminMainHeader.html'), name);

let AdminMainHeaderComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminMainHeader
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminMainHeaderComponent;