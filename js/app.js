const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function () {
        let categoryIdCounter = -1;
        let itemIdCounter = 1;
        return {
            appTitle: "Instant Inventory",
            currentPage: "home",
            currentPageLabel: "home",
            filterSettings: {
                toggles: [
                    {
                        label: "Include Categories",
                        state: true
                    },
                    {
                        label: "Include Items",
                        state: true
                    },
                    {
                        label: "Only Under Threshold",
                        state: false
                    },
                ],
                searchString: "",
            },
            appVersion: "Vue App v3.0 (Demo)",
            pageConfigSettings: {
                profileName: "Test Testerson",
                customName: "Custom Name",
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
            newCategory: new Category("","","/staticImages/folder.svg"),
            library: new InventoryCollection()
                .add(new Category('Category 1','Category 1\'s description', '/staticImages/folder.svg'))
                .add(new Item('Fjallraven - Foldsack No. 1 Backpack','Your perfect pack for everyday use and walks in the forest.', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', '923087', 2, 4,Date.now() - 1000 * 60 * 60 * 9)),
            // categoriesList: [
            //     new Category(
            //         categoryIdCounter--,
            //         'Category 1',
            //         'An example category description.',
            //         [
            //             {},
            //             {},
            //             {},
            //         ]
            //     ),
            //     new Category(
            //         categoryIdCounter--,
            //         'Category 2',
            //         'Another example category description.',
            //         [
            //             {},
            //         ]
            //     ),
            // ],
            // itemsList: [
            //     new Item(
            //         itemIdCounter++,
            //         'Fjallraven - Foldsack No. 1 Backpack',
            //         'Your perfect pack for everyday use and walks in the forest.',
            //         'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            //         4,
            //         923087,
            //         -1,
            //         Date.now() - 1000 * 60 * 60 * 9
            //     ),
            //     new Item(
            //         itemIdCounter++,
            //         'Mens Casual Premium Slim Fit T-Shirts',
            //         'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            //         'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            //         3,
            //         872892,
            //         5,
            //         Date(Date.now() - 1000 * 60 * 60 * 34)
            //     ),
            //     new Item(
            //         itemIdCounter++,
            //         'Mens Cotton Jacket',
            //         'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
            //         'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            //         5,
            //         872893,
            //         2,
            //         Date.now()
            //     ),
            // ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        openNavPage(pageLabel) {
            this.currentPageLabel = pageLabel.charAt(0).toUpperCase() + pageLabel.slice(1);

            // this.currentPageTitle = $(`*[data-navpage="${pageLabel}"]`).attr("data-pageTitle");
            // this.currentPageTitle = document.querySelector(`*[data-navpage="${pageLabel}"]`).getAttribute("data-pageTitle");

            this.currentPage = pageLabel;
            // this.currentPage = `${pageLabel}`;
            // $(function() {
            //     $(`*[data-navPage]`).addClass('d-none');
            //     $(`*[data-navPage="${pageLabel}"]`).removeClass('d-none');
            // });
            // this.currentPageTitle = document.querySelectorAll(`*[data-navPage="${pageLabel}"]`)[0].getAttribute("data-pageTitle");
        },
        saveItem(item){
            // // this.library
            console.log("Old", item[0]);
            console.log("New", item[1]);
            // // library.replaceByValue('banana');
            this.library.updateValue(item[0], item[1])
        },
        removeItem(removeItem) {
            this.library.remove(removeItem);
        },

    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        currentCategoriesList() {
            let filteredList = [];
            // if (this.filterSettings.toggles[0].state) {
            //     filteredList = this.categoriesList;
            // }
            // if (this.filterSettings.toggles[1].state) {
            //     //     When doings items contained in a list they should be filtered here recursively
            // }
            // if (this.filterSettings.searchString) {
            //     filteredList = filteredList.filter(item => item.title.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()) || item.description.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()));
            // }
            //
            // filteredList.sort((a, b) => a.title.localeCompare(b.title));

            return filteredList;
        },
        currentItemsList() {
            let filteredList = [];
            // if (this.filterSettings.toggles[1].state) {
            //     filteredList = this.itemsList;
            // }
            // if (this.filterSettings.toggles[2].state) {
            //     filteredList = filteredList.filter(item => item.needsReorder());
            // }
            // if (this.filterSettings.searchString) {
            //     filteredList = filteredList.filter(item => item.title.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()) || item.description.toLowerCase().includes(this.filterSettings.searchString.toLowerCase()));
            // }

            // filteredList.sort((a, b) => a.title.localeCompare(b.title));

            return filteredList;
        },
        recentItemsList() {
            let filteredList = [];
            // const last24hoursCompareTo = Date.now() - 86400000;
            // filteredList = this.itemsList.filter(item => new Date(item.lastUpdated > last24hoursCompareTo));
            return filteredList;
        },
        filterOptionsArray() {
            return [
                {
                    label: 'Include Items',
                    options: this.filterSettings.includeItems,
                },
            ];
        },
        computedCurrentPageTitle() {
            return this.currentPage.charAt(0).toUpperCase() + this.currentPage.slice(1);
        }
    },

    //mounted:  called after the instance has been mounted,
    // mounted: function () {
    created: function () {
        if (localStorage.getItem('openPage')) {
            this.currentPage = localStorage.getItem('openPage');
        }
        if (localStorage.getItem('pageConfigSettings')) {
            this.pageConfigSettings = JSON.parse(localStorage.getItem('pageConfigSettings'));
        }
        if (localStorage.getItem('filterSettings')) {
            this.filterSettings = JSON.parse(localStorage.getItem('filterSettings'));
        }

        // const localStorageMap = new Map([
        //     ['filterSettings', this.filterSettings],
        //     // ['categoriesList', this.categoriesList],
        //     // ['itemsList', this.itemsList],
        // ]);
        // localStorageMap.forEach((value, key) => {
        //     const storedValue = localStorage.getItem(key);
        //     if(storedValue){
        //         //         localStorageMap.get(key).value = JSON.parse(localStorage.getItem(key));
        //         this[key] = JSON.parse(storedValue);
        //     }
        // });

    },
    mounted() {
        this.currentPageTitle = this.currentPageLabel.charAt(0).toUpperCase() + this.currentPageLabel.slice(1);
    },
    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        library: {
            handler() {
                console.log('Library changed:', "3eeeeee");
            },
            deep: true,
        },
        currentPage: {
            handler() {//newList){
                localStorage.setItem('openPage', this.currentPage);
            },
        },
        filterSettings: {
            handler() {//newList){
                localStorage.setItem('filterSettings', JSON.stringify(this.filterSettings));
            },
            deep: true,
        },
        categoriesList: {
            handler() {//newList){
                localStorage.setItem('categoriesList', JSON.stringify(this.categoriesList));
            },
            deep: true,
        },
        itemsList: {
            handler() {//newList){
                localStorage.setItem('itemsList', JSON.stringify(this.itemsList));
            },
            deep: true,
        },
        pageConfigSettings: {
            handler() {//newList){
                localStorage.setItem('pageConfigSettings', JSON.stringify(this.pageConfigSettings));
            },
            deep: true
        },
        newItem: {
            handler() {
                console.log(this.newItem.reorderLevel);
                if (this.newItem.reorderLevel === -1) {
                    this.newItem.reorderLevel = undefined;
                }
            },
            deep: true,
        },
        // currentPageLabel:{
        //     handler(){
        //         this.currentPageLabel;
        //         this.currentPageTitle = this.currentPageLabel.charAt(0).toUpperCase()+this.currentPageLabel.slice(1);
        //     }
        // }
    }
});
