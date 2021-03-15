declare function require(name:string);
import Vue from './../../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../../node/src/core/dom';
import AdminHome from './AdminHome';
// import './AdminHome.scss';

let name = 'adminhome';
let tpl = injector.inject(require('./AdminHome.html'), name);

let AdminHomeComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: AdminHome
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default AdminHomeComponent;