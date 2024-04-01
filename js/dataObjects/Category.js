class CategoryOld{
    constructor(id, title, description, items){
        this.id = (id === undefined)? -1 : id;
        this.title = title;
        this.description = description;
        this.image = '/staticImages/folder.svg';
        this.items = (items === undefined)? [] : items;
        this.needsReorder = function(){//Will be turned into a function when it stores items and will be true if any contained items also need reorders
            return false;
        };
    }
}