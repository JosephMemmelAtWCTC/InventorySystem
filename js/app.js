const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            currentPage: -1,
            newCategory: {
                id: -1,
                title: '',
                description: '',
                image: './staticImages/folder.svg',
            },
            categoriesList: [
                {
                    id: -1,
                    title: '',
                    description: 'An example category description.',
                    image: './staticImages/folder.svg',
                    items: [
                        {},
                        {},
                        {}
                    ]
                },{
                    id: -1,
                    title: '',
                    description: 'An example category description.',
                    image: './staticImages/folder.svg',
                    items: [
                        {},
                        {},
                        {}
                    ]
                },
            ],
            itemsList: [
                {
                    // "id": 1,
                    // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    // "price": 109.95,
                    // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    // "category": "men's clothing",
                    // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    // "rating": {
                    //     "rate": 3.9,
                    //     "count": 120
                    // }
                }
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
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        currentCategoriesList(){
            return this.categoriesList;
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
