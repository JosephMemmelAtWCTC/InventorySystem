// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those).
// Prototypes are simply objects that define a template for future objects.

// Prototypes/Classes use TitleCase for naming
function InventoryCollection(arr = []) {

    arr.add = function (item) {
        this.push(new InventoryItem(item));

        // return this for chaining
        return this;
    }

    arr.remove = function (item) {
        this.splice(this.indexOf(item), 1)

        return this;
    }

    arr.updateOrAddValue = function (itemOld, itemNew) {
        if(typeof itemOld === 'undefined'){
            this.push(new InventoryItem(itemNew));
            return;
        }

        console.log("updateValue called",this.filter(i => i.title === itemOld.title));

        // FindIndex works for some reason over indexOf & filter
        const existingIndex = this.findIndex(i => i.title === itemOld.title);
        if(existingIndex === -1){
            // if(itemNew.itemConstructorType === ""){
            itemNew = Object.assign(itemNew.constructor, itemNew);
            // }
            console.log("arr.add(itemNew);", itemNew);
            // arr.add(Object.assign(new Category(), itemNew));
            arr.add(itemNew);
        }else{
            this[existingIndex] = itemNew;
        }
        return this;
    }

    return arr;
}

function InventoryItem(item){
    const STOCKED_LEVEL_STATUSES = {
        UNSET       : 'Unset',
        IN_STOCK    : 'Stocked',
        LOW_STOCK   : 'Under refill level',
        OUT_OF_STOCK: '0 items remaining'
        //Overstocked?
    };

    const REORDER_MESSAGE_THRESHOLD = {
        LOW_STOCK   : 'Under refill level',
        OUT_OF_STOCK: '0 items remaining',
        NONE        : 'No warning',
        //Overstocked?
    };

    // set the default status
    item.reorderMessageWhen = REORDER_MESSAGE_THRESHOLD.LOW_STOCK;

    // methods

    //Update message thresholds

    item.needsMessage = function(){
        switch(this.reorderMessageWhen){
            case REORDER_MESSAGE_THRESHOLD.LOW_STOCK:
                return item.hasLowStock;
            case REORDER_MESSAGE_THRESHOLD.OUT_OF_STOCK:
                return false;
            case REORDER_MESSAGE_THRESHOLD.NONE:
            default:
                return false;
        }
        // return  === STOCKED_LEVEL_STATUSES.LOW_STOCK || STOCKED_LEVEL_STATUSES.OUT_OF_STOCK;
    }

    return item;
}

class Category { //Rename to Group?
    static type = "Category";
    static cardDetailsComponent = "EditCategoryCard";

    items = [];
    title = "";

    constructor(title, description, imageURL, items = []) {
        this.constructorSaved = this.constructor;

        this.title       = title;
        this.description = description;
        this.imageSrc    = imageURL;
        this.items       = this.items.concat(items)
    }

    // get hasLowStock(){
    //     for(let i = 0; i < this.items.length; i++) {
    //         if(this.items[i].hasLowStock){
    //             return true;
    //         }
    //     //     TODO: Make it store just a copy and have a different way to update
    //     }
    //     return false;
    // }
    //
    // get itemCount(){
    //     let count = 0;
    //     for(const item in this.items) {
    //         count += item.itemCount;
    //     }
    //     return count;
    // }
    // get uniqueItemCount(){
    //     let count = 0;
    //     for(const item in this.items) {
    //         count += item.uniqueItemCount;
    //     }
    //     return count;
    // }
}

class StoreItem {
    static type = "StoreItem";
    static cardDetailsComponent = "editItemCard";

    product = null;

    constructor(product, inStockLevel, reorderLevel, lastUpdated= Date.now()) {
        this.product      = product;

        this.inStockLevel = inStockLevel;
        this.reorderLevel = reorderLevel;

        this.lastUpdated  = lastUpdated;
    }

    get hasLowStock(){
        return this.inStockLevel <= this.reorderLevel;
    }
}

// "Generic" class to extend for product types
class Product {
    constructor(title, description, imageURL, productId) {
        this.title        = title;
        this.description  = description;
        this.imageSrc     = imageURL;
        this.productId    = productId;
    }
}

