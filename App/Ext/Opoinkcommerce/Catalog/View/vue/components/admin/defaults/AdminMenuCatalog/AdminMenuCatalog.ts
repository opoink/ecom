class AdminMenuCatalog {

    isChildShow: boolean = false;

    constructor(){}

    init(){
        console.log('AdminMenuCatalog data object works');
    }

    showChild(){
        if(this.isChildShow){
            this.isChildShow = false;
        } else {
            this.isChildShow = true;
        }
    }
}

export default new AdminMenuCatalog();