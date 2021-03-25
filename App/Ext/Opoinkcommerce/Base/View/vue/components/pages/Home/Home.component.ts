declare function require(name:string);
import Vue from './../../../../../../../../node/node_modules/vue/dist/vue.min';
import injector from './../../../../../../../../node/src/core/dom';
import Home from './Home';
// import './Home.scss';

let name = 'vue-home';
let tpl = injector.inject(require('./Home.html'), name);

let HomeComponent = Vue.component(name, {
    data: (f) => {
        return {
            vue: Home
        }
    },
    beforeMount: (f) => {
        
    },
    template: tpl
});
export default HomeComponent;