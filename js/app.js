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
            newItem: new StoreItem(new Product("","","https://picsum.photos/200/300",""), 1, undefined),
            newCategory: new Category("","","/staticImages/folder.svg"),
            library: new InventoryCollection()
                .add(new Category('Category 1','Category 1\'s description', '/staticImages/folder.svg'))
                .add(new StoreItem(
                    new Product(
                    'Fjallraven - Foldsack No. 1 Backpack',
                    'Your perfect pack for everyday use and walks in the forest.',
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                    '923087'
                    ), 2, 4, Date.now() - 1000 * 60 * 60 * 9)
                ),
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        openNavPage(pageLabel) {
            this.currentPageLabel = pageLabel.charAt(0).toUpperCase() + pageLabel.slice(1);

            this.currentPage = pageLabel;
        },
        saveItem(item){
            console.log("It came here", item);
            // // this.library
            console.log("Old", item[0]);
            console.log("New", item[1]);
            this.library.updateOrAddValue(item[0], item[1])
        },
        removeItem(removeItem) {
            console.log("It came here removeItem", removeItem);

            this.library.remove(removeItem);
        },

    },

    // computed: values that are updated and cached if dependencies change
    computed: {
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

    },
    mounted() {
        this.currentPageTitle = this.currentPageLabel.charAt(0).toUpperCase() + this.currentPageLabel.slice(1);
    },
    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        library: {
            handler() {
                console.log('Library changed: ');
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

    }
});
