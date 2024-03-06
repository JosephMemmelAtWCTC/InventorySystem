class Item{
    constructor(id, title, description, image, qty, productId, reorderLevel, lastUpdated){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.qty = qty;
        this.productId = productId;
        this.lastUpdated = lastUpdated;
        console.log(this.reorderLevel);
        if(this.reorderLevel === null){
            this.reorderLevel = -1;
        }else{
            this.reorderLevel = reorderLevel;
        }

        this.needsReorder = ()=> {
            return this.reorderLevel !== -1 && this.qty < this.reorderLevel;
        }
    }
}
class Category{
    constructor(id, title, description, items){
        this.id = (id === undefined)? -1 : id;
        this.title = title;
        this.description = description;
        this.image = './staticImages/folder.svg';
        this.items = (items === undefined)? [] : items;
    }
}

const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        let categoryIdCounter = -1;
        let itemIdCounter = 1;
        return {
            currentPage: "home",
            currentPageTitle: "TEST",
            filterSettings: {
                includeCategories: false,
                includeItems: true,
                underThreshold: false,
                searchString: "",
            },
            itemsViewMode: false,
            newItem: {
                id: undefined,
                title: '',
                description: '',
                image: 'https://picsum.photos/200/300',
                qty: 1,
                productId: null,
                reorderLevel: null,
            },
            newCategory: {
                id: null,
                title: '',
                description: '',
                image: './staticImages/folder.svg',
            },
            editItem: {
                id: undefined,
                title: '',
                description: '',
                image: 'https://picsum.photos/200/300',
                qty: 0,
                productId: null,
                reorderLevel: null,
            },
            categoriesList: [
                new Category(
                    categoryIdCounter--,
                    'Category 1',
                    'An example category description.',
                    [
                        {},
                        {},
                        {},
                    ]
                ),
                new Category(
                    categoryIdCounter--,
                    'Category 2',
                    'Another example category description.',
                    [
                        {},
                    ]
                ),
            ],
            itemsList: [
                new Item(
                    itemIdCounter++,
                    'Fjallraven - Foldsack No. 1 Backpack',
                    'Your perfect pack for everyday use and walks in the forest.',
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                    4,
                    923087,
                    -1,
                    Date.now()-1000*60*60*9
                ),
                new Item(
                    itemIdCounter++,
                    'Mens Casual Premium Slim Fit T-Shirts',
                    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
                    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                    3,
                    872892,
                    5,
                    Date(Date.now()-1000*60*60*34)
                ),
                new Item(
                    itemIdCounter++,
                    'Mens Cotton Jacket',
                    'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
                    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
                    5,
                    872893,
                    2,
                    Date.now()
                ),
            ],
            addCategoryForm: undefined,
            addItemForm: undefined,
            editItemForm: undefined,
            getAddCategoryForm: function(){
                if(this.addCategoryForm === undefined){
                    this.addCategoryForm = document.querySelector('#newCategoryModel form');
                }
                return this.addCategoryForm;
            },

            getEditItemForm: function(){
                if(this.editItemForm === undefined){
                    this.editItemForm = document.querySelector('#editItemModel form');
                }
                return this.editItemForm;
            }
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        openNavPage(pageLabel){
            this.currentPageTitle = $(`*[data-navPage="${pageLabel}"]`).attr("data-pageTitle");
            this.currentPage = pageLabel;
            // this.currentPage = `${pageLabel}`;
            // $(function() {
            //     $(`*[data-navPage]`).addClass('d-none');
            //     $(`*[data-navPage="${pageLabel}"]`).removeClass('d-none');
            // });
        },
        addCategory(e){
            if(this.getAddCategoryForm().checkValidity()){
                this.categoriesList.push(new Category(
                    this.newCategory.id,
                    this.newCategory.title,
                    this.newCategory.description,
                    this.newCategory.image
                ));
                // Clear the form
                this.newCategory = {
                    id: null,
                    title: '',
                    description: '',
                    image: './staticImages/folder.svg',
                };
                console.log(this.getAddCategoryForm().classList)
                document.querySelector('#newCategoryModel form').classList.remove("was-validated");
                console.log(this.getAddCategoryForm().classList)
                // https://stackoverflow.com/a/16493402 - trying also to do with vue/bootstrap
                $('#newCategoryModel').modal('hide');
            }
        },
        addItem(newItem){
            this.itemsList.push(
                new Item(
                    newItem.id,
                    newItem.title,
                    newItem.description,
                    newItem.image,
                    newItem.qty,
                    newItem.productId,
                    newItem.reorderLevel
                )
            );
        },
        updateEditItem(settingEditItem){
            console.log("~~~~~~~~~~~~~", settingEditItem);
            this.editItem = settingEditItem;
        },
        removeItem(removeItem){
            this.itemsList.splice(this.itemsList.indexOf(removeItem), 1);
        },
        openEditItemModel(){
            if(this.getEditItemForm().checkValidity()){
                // Clear the form
                this.newItem = {
                    title: '',
                    description: '',
                    image: 'https://picsum.photos/300',
                    // qty: 0,
                    productId: null,
                    reorderLevel: -1,
                };
                this.getAddItemForm().classList.remove("was-validated");
                // https://stackoverflow.com/a/16493402 - trying also to do with vue/bootstrap
                $('#editItemModel').modal('hide');
            }
        },


    //     Types for card footers
        getCategoryFooter: function(cardData){
            // return "CAT";
            // return '{{ cardData.items.length }} unique item{{ cardData.items.length === 1? "":"s" }}';
            return `${cardData.items.length} unique item${cardData.items.length === 1? "":"s"}`;
        },
        // getItemFooter: function(cardData) {
        //     // return `<span v-bind:class="{'text-warning-emphasis': item.needsReorder()}" >
        //     //     {{ cardData.qty }}{{ cardData.reorderLevel === -1 || cardData.reorderLevel === undefined || cardData.reorderLevel === null ? "": cardData.reorderLevel}} item{{item.qty==1? "":"s"}} in stock
        //     //     <i v-if="cardData.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>
        //     // </span>`;
        // }
        // getItemFooter: function(item) {
        //   //   return `<span class="text-warning-emphasis" :class="{'text-warning-emphasis': item.needsReorder()}">
        //   //    ${item.qty} ${item.reorderLevel !== -1 && item.reorderLevel !== undefined && item.reorderLevel !== null ? `/${item.reorderLevel}` : ''} item${item.qty === 1 ? '' : 's'} in stock
        //   //    <i v-if="item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>
        //   // </span>`;
        // }
        // getItemFooter: function(item) {
        //     return `<span :class="{'text-warning-emphasis': item.needsReorder()}">
        //      ${item.qty} ${item.reorderLevel !== -1 && item.reorderLevel !== undefined && item.reorderLevel !== null ? `/${item.reorderLevel}` : ''} item${item.qty === 1 ? '' : 's'} in stock
        //      <i v-if="item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>
        //   </span>`;
        // }
        getItemFooter: function(item) {
          //   return `<span :class="{'text-warning-emphasis': item.needsReorder()}">
          //    ${item.qty} ${item.reorderLevel !== -1 && item.reorderLevel !== undefined && item.reorderLevel !== null ? `/${item.reorderLevel}` : ''} item${item.qty === 1 ? '' : 's'} in stock
          //    <i v-if="item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>
          // </span>`;

            return `<span v-bind:class="{'text-warning-emphasis': false}">
                ${item.qty} ${item.reorderLevel !== -1 && item.reorderLevel !== undefined && item.reorderLevel !== null ? `/${item.reorderLevel}` : ''} item${item.qty === 1 ? '' : 's'}
                 <i v-if="${item.needsReorder()}" class="bi bi-exclamation-diamond-fill"></i>
            </span>`;

        },
        updateToggle: function(variableToUpdate){
            this.filterSettings[variableToUpdate] = !this.filterSettings[variableToUpdate];
        },
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        currentCategoriesList() {
            let filteredList = [];
            if (this.filterSettings.includeCategories) {
                filteredList = this.categoriesList;
            }
            if (this.filterSettings.underThreshold){
            //     When doings items contained in a list they should be filtered here recursively
            }
            if(this.filterSettings.searchString){
                filteredList = filteredList.filter(item => item.title.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()) || item.description.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()));
            }
            return filteredList;
        },
        currentItemsList(){
            let filteredList = [];
            if(this.filterSettings.includeItems){
                filteredList = this.itemsList;
            }
            if(this.filterSettings.underThreshold){
                filteredList = filteredList.filter(item => item.needsReorder());
            }
            if(this.filterSettings.searchString){
                filteredList = filteredList.filter(item => item.title.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()) || item.description.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()));
            }
            return filteredList;
        },
        recentItemsList(){
            let filteredList = [];
            const last24hoursCompareTo = Date.now() - 86400000;
            filteredList = this.itemsList.filter(item => new Date(item.lastUpdated > last24hoursCompareTo));
            return filteredList;
        },
        filterOptionsArray(){
            return [
                {
                    label: 'Include Items',
                    options: this.filterSettings.includeItems,
                },
            ];
        },
    },

    //mounted:  called after the instance has been mounted,
    // mounted: function () {
    created: function(){
        // if(localStorage.getItem('shoppingList')){
        //     this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        // }
        if(localStorage.getItem('openPage')){
            this.currentPage = localStorage.getItem('openPage');
        }

        const localStorageMap = new Map([
            ['filterSettings', this.filterSettings],
            // ['categoriesList', this.categoriesList],
            // ['itemsList', this.itemsList],
        ]);
        localStorageMap.forEach((value, key) => {
            const storedValue = localStorage.getItem(key);
            if(storedValue){
                //         localStorageMap.get(key).value = JSON.parse(localStorage.getItem(key));
                this[key] = JSON.parse(storedValue);
            }
        });

        if(localStorage.getItem('categoriesList')){
            this.categoriesList = JSON.parse(localStorage.getItem('categoriesList'));
        }
        if(localStorage.getItem('itemsList')){
            this.itemsList = JSON.parse(localStorage.getItem('itemsList'));
            this.itemsList.map(itemWithoutMethods => {
                const item = new Item(
                    itemWithoutMethods.title,
                    itemWithoutMethods.description,
                    itemWithoutMethods.image,
                    itemWithoutMethods.qty,
                    itemWithoutMethods.productId,
                    itemWithoutMethods.reorderLevel,
                    itemWithoutMethods.lastUpdated
                );
                // itemWithoutMethods.needsReorder = Item.needsReorder; TODO: Get working without repeating code for method
                console.log(itemWithoutMethods.title);
                itemWithoutMethods.needsReorder = ()=> {
                    return itemWithoutMethods.reorderLevel !== -1 && itemWithoutMethods.qty < itemWithoutMethods.reorderLevel;
                }
                return item;
            });
        }

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        currentPage:{
            handler(){//newList){
                localStorage.setItem('openPage', this.currentPage);
            },
        },
        filterSettings:{
            handler(){//newList){
                localStorage.setItem('filterSettings', JSON.stringify(this.filterSettings));
            },
            deep: true,
        },
        categoriesList:{
            handler(){//newList){
                localStorage.setItem('categoriesList', JSON.stringify(this.categoriesList));
            },
            deep: true,
        },
        itemsList:{
            handler(){//newList){
                localStorage.setItem('itemsList', JSON.stringify(this.itemsList));
            },
            deep: true,
        },
        newItem:{
            handler() {
                console.log(this.newItem.reorderLevel);
                if(this.newItem.reorderLevel === -1){
                    this.newItem.reorderLevel = undefined;
                }
            },
            deep: true,
        }
    }
});
