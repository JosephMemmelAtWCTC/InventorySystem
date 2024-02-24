class Item{
    constructor(id, title, description, image, qty, productId, reorderLevel){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.qty = qty;
        this.productId = productId;
        this.reorderLevel = reorderLevel;

        this.needsReorder = ()=> {
            return this.reorderLevel !== -1 && this.qty < this.reorderLevel;
        }
    }
}
class Category{
    constructor(id, title, description, items){
        // Debug.log
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
            currentPage: -1,
            newCategory: {
                id: null,
                title: '',
                description: '',
                image: './staticImages/folder.svg',
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
                    -1
                ),
                new Item(
                    itemIdCounter++,
                    'Mens Casual Premium Slim Fit T-Shirts',
                    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
                    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                    3,
                    872892,
                    5,
                ),
                new Item(
                    itemIdCounter++,
                    'Mens Cotton Jacket',
                    'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
                    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
                    5,
                    872892,
                    2,
                ),
            ]
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        openNavPage(pageLabel){
            this.currentPage = pageLabel;
            console.log(`opening page ${pageLabel}`);
            // this.currentPage = `${pageLabel}`;
            // $(function() {
            //     $(`*[data-navPage]`).addClass('d-none');
            //     $(`*[data-navPage="${pageLabel}"]`).removeClass('d-none');
            // });
        },
        addCategory(e){
            this.categoriesList.push(new Category(
                this.newCategory.id,
                this.newCategory.title,
                this.newCategory.description,
                this.newCategory.image
            ));
            // Clear the form
            this.newItem = {
                name: '',
                qty: 1,
                category: 'need',
                purchased: false,
            };
        },
        addItem(e){
            this.shoppingList.push(this.newItem);

            // Clear the form
            this.newItem = {
                name: '',
                qty: 1,
                category: 'need',
                purchased: false,
            };
        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        currentCategoriesList(){
            return this.categoriesList;
        },
        currentItemsList(){
            return this.itemsList;
        },
        // gotList(){
        //     return this.shoppingList.filter(function(item){
        //         return item.purchased;
        //     });
        // },
        // wantList(){
        //     return this.shoppingList.filter(function(item){
        //         return !item.purchased && item.category === 'want';
        //     });
        // },
    },

    //mounted:  called after the instance has been mounted,
    // mounted: function () {
    created: function(){
        // if(localStorage.getItem('shoppingList')){
        //     this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        // }
        if(localStorage.getItem('openPage')){
            console.log("1111");
            this.currentPage = localStorage.getItem('openPage');
            console.log("2222"+this.currentPage);
            // this.openNavPage(localStorage.getItem('openPage'));
        }

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        currentPage:{
            handler(){//newList){
                localStorage.setItem('openPage', this.currentPage);
            },
        }
    }
});
