import $ from './../../../../../../../../node/node_modules/jquery';
import VRouter from './../../../../../../../../node/src/core/VueRouter';

class DefaultHeader {

    isShown: boolean = false;
    searchKey:any = '';

    constructor(){
        let searchKey = VRouter.getQuery('search');
        if(searchKey){
            this.searchKey = searchKey;
        }
    }

    init(){
        console.log('DefaultHeader data object works');
    }

    /**
     * display he menu of the page
     */
    showMenu(){
        if(this.isShown){
            $('.DefaultHeader .backdrop').fadeOut();
            $('#nav-container').removeClass('active');
            this.isShown = false;
        } else {
            $('.DefaultHeader .backdrop').fadeIn();
            $('#nav-container').addClass('active');
            this.isShown = true;
        }
    }

    /**
     * start the search this will navigate to 
     * product search page
     */
    startSearch(){
        let path = '/products';
        // if(this.searchKey){
        //     path += '?search=' + this.searchKey;
        // }
        
        path += '?search=' + this.searchKey;
        VRouter.navigateTo(path);
    }

    /**
     * check if the key is an enter or not
     * @param e 
     */
    checkEnter(e){
        if(e.key.toLowerCase() == 'enter'){
            this.startSearch();
            return false;
        }
    }
}

export default new DefaultHeader();