app.component('PageInventoryCardsSearch', {
    data: function () {
        return {
            editCategory: {
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
        };
    },
    props: {
        searchLabel: {
            type: String,
            default: "Search",
        },
        currentCombinedItemsList: {
            type: Array,
            required: true,
        },
        filterSettings: {
            type: Object,
            required: true,
        },
    },
    emits: ['save-it','remove-category', 'remove-item'],
    methods: {
        removeCategory() {
            this.$emit('remove-category', this.editCategory);
        },
        removeItem(removeItem) {
            this.$emit('remove-item', this.editItem);
        },
        saveItem(item){
            console.log("Saved send up PageInventoryCardsSearch");
            this.$emit('save-it', item);
        },
    },
    created:  function () {
    },
    mounted: function () {
    },
    watch: {
        example: {
            handler() {
            },
        },
    },
    computed: {
    },
    template: `
        <main-content-page>
            <header class="bg-body-tertiary rounded-3">
                <div class="row align-items-center p-2">
                    <div class="col-auto d-flex text-center align-items-center">
                        <p class="ms-4">{{searchLabel}}</p>
                    </div>

                    <div class="col end-0">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="searchTextDescribe"><i class="bi ms-1 bi-search"></i></span>
                            <input type="text" v-model="filterSettings.searchString" class="form-control focus-ring-primary" placeholder="" aria-label="Search" aria-describedby="searchTextDescribe">
<!--                            <q-input filled v-model="filterSettings.searchString" class="form-control focus-ring-primary" placeholder="" aria-label="Search" aria-describedby="searchTextDescribe"-->
<!--                                     autofocus-->
<!--                                     label="Name"-->
<!--                            ></q-input>-->
                        </div>
                    </div>

                    <toggles-array :options="filterSettings.toggles">
                    </toggles-array>

                    <div class="col-12 ps-3 mb-0 pb-0">
                        <nav aria-label="Inventory Explorer Breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#" class="link-primary">Warehouse</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Category ____</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <results-possibly-empty
                :display-is-empty="currentCombinedItemsList.length === 0"
                empty-title="Whoops"
                empty-text="It looks like there are no results that fit your search criteria, try loosing your requirements or adding more items."
            >            
            </results-possibly-empty>
            <div class="row g-2 m-1 row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
                <cards-list v-bind:items="currentCombinedItemsList"
                            @save-it="saveItem"
                            @remove-it="removeItem"
                >
                </cards-list>
            </div>
                
            <slot name="extra">
            </slot>
        </main-content-page>
    `,
});