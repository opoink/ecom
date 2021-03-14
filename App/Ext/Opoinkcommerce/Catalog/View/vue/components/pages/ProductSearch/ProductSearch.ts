import VRouter from './../../../../../../../../node/src/core/VueRouter';

class ProductSearch {

    searchKey:any = null;

    constructor(
        public router:any = VRouter
    ){}

    init(to:any=null, from:any=null){
        this.searchKey = '';
        if(to){
            if(typeof to.params['search']){
                this.searchKey = to.query['search'];
            }
        } else {
            this.searchKey = this.router.getQuery('search');
        }

        console.log(this.searchKey);

        /** todo: make an api call to get products */
    }
}

export default new ProductSearch();