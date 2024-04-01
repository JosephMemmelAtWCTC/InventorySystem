class ItemOLD{
    constructor(id, title, description, image, qty, productId, reorderLevel, lastUpdated){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.qty = qty;
        this.productId = productId;
        this.lastUpdated = lastUpdated;
        // console.log(this.reorderLevel);
        // if(this.reorderLevel === null){
        //     this.reorderLevel = null;
        // }else{
        this.reorderLevel = reorderLevel;
        // }

        this.needsReorder = ()=> {
            return this.reorderLevel !== -1 && this.qty < this.reorderLevel;
        }
    }
}