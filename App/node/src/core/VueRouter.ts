import VueRouter from './../../node_modules/vue-router/dist/vue-router.min';

class VRouter {

    routes:any = [];
    vueRouter:any;
    VueRouter:any = VueRouter;

    constructor(){
        let routes = [];
        this.vueRouter = new VueRouter({
            mode: 'history',
            routes: []
        });
    }

    addRoute(option){
        this.vueRouter.addRoute(option)
    }

    getCurrentPath(){
        return this.vueRouter.currentRoute;
    }

    /**
     * @returns the params that was in the url path
     * ex: /user/:id it will return the param
     */
    getParam(param:any = null){
        if(param){
            if(typeof this.vueRouter.currentRoute.params[param] != 'undefined'){
                return this.vueRouter.currentRoute.params[param];
            } else {
                return null;
            }
        } else {
            return this.vueRouter.currentRoute.params;
        }
    }

    /**
     * return the query from the url
     */
    getQuery(param:any = null){
        if(param){
            if(typeof this.vueRouter.currentRoute.query[param] != 'undefined'){
                return this.vueRouter.currentRoute.query[param];
            } else {
                return null;
            }
        } else {
            return this.vueRouter.currentRoute.query;
        }
    }

    /**
     * navigate to the passed path
     */
    navigateTo(path:any = ''){
        let currentPath = this.getCurrentPath().fullPath;
        if(currentPath != path){
            this.vueRouter.push(path);
        }
    }
}

export default new VRouter();
