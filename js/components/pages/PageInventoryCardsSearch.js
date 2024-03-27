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
        currentCategoriesList: {
            type: Array,
            required: true,
        },
        currentItemsList: {
            type: Array,
            required: true,
        },
        filterSettings: {
            type: Object,
            required: true,
        },
    },
    emits: ['remove-category', 'remove-item'],
    methods: {
        removeCategory() {
            this.$emit('remove-category', this.editCategory);
        },
        removeItem(removeItem) {
            this.$emit('remove-item', this.editItem);
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
                        <p class="ms-4">Filter Search</p>
                    </div>

                    <div class="col end-0">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="searchTextDescribe"><i class="bi ms-1 bi-search"></i></span>
                            <input type="text" v-model="filterSettings.searchString" class="form-control focus-ring-primary" placeholder="" aria-label="Search" aria-describedby="searchTextDescribe">
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
                :display-is-empty="currentCategoriesList.length === 0 && currentItemsList.length === 0"
                empty-title="Whoops"
                empty-text="It looks like there are no results that fit your search criteria, try loosing your requirements or adding more items."
            >
            </results-possibly-empty>
            <div class="row g-2 m-1">

                <cards-list v-bind:items="currentCategoriesList"
                            @card-clicked="this.editCategory = $event;
                            this.$nextTick(() => {
                                this.$refs.editModal.openModal();
                            });"
                >
                    <template #extra v-slot="slotProps">
                        <edit-modal :item="this.editCategory"
                                    @remove-it="removeCategory"
                                    can-remove
                                    title="Edit Category"
                                    :submit-button-text="'Update Category'"
                                    ref="editModal"
                        >
                            <template v-slot="slotProps">
                                <q-input filled v-model="slotProps.editItem.title"
                                         autofocus
                                         label="Name"
                                         class="full-width"
                                         :rules="[val => !!val || '* Required']"
                                         lazy-rules
                                ></q-input>
                                <q-input filled v-model="slotProps.editItem.description"
                                         type="textarea"
                                         rows="4"
                                         label="Description"
                                         class="full-width"
                                         :rules="[val => !!val || '* Required']"
                                         lazy-rules
                                ></q-input>
                            </template>
                        </edit-modal>
                    </template>
    
                    <template v-slot="slotProps">
    <!--                            <div :class="{'text-warning-emphasis': slotProps.item.needsReorder()}">-->
                            {{ slotProps.item.items.length }} unique item{{ slotProps.item.items.length === 1? "":"s" }}
    <!--                            </div>-->
                    </template>
                </cards-list>
                
                <!-- https://stackoverflow.com/a/65686099 for inline editing -->
                <!-- https://masteringjs.io/tutorials/vue/nexttick for waiting until the next tick to open with the changed value -->
                <cards-list v-bind:items="currentItemsList"
                            @card-clicked="this.editItem = $event;
                            this.$nextTick(() => {
                                this.$refs.editModal.openModal();
                            });"
                >
                    <template #extra v-slot="slotProps">
                        <!--TODO: Can I pass in an emit here for can-remove?-->
                        <edit-modal :item="this.editItem"
                                    @remove-it="removeItem"
                                    can-remove
                                    title="Edit Item"
                                    :submit-button-text="'Update Item'"
                                    ref="editModal"
                        >
                            <template v-slot="slotProps">
                                <q-input filled v-model="slotProps.editItem.title"
                                         label="Name"
                                         class="full-width"
                                         autofocus
                                         :rules="[val => !!val || '* Required']"
                                         lazy-rules
                                ></q-input>
                                <q-input filled v-model="slotProps.editItem.productId"
                                         label="Product ID"
                                         class="full-width"
                                         :rules="[val => !!val || '* Required']"
                                         lazy-rules
                                ></q-input>
                                <q-input filled v-model="slotProps.editItem.description"
                                         type="textarea"
                                         rows="4"
                                         label="Description"
                                         class="full-width"
                                         :rules="[val => !!val || '* Required']"
                                         lazy-rules
                                ></q-input>
                                <q-input filled v-model.number="slotProps.editItem.reorderLevel"
                                        type="number"
                                        label="Reorder Level"
                                        class="full-width clearable"
                                        clearable
                                        clear-icon="bi-x"
                                        placeholder="Leave blank to ignore reorder"
                                        :rules="[val => val >= 0 || 'Count cannot be less than 0']"
                                        lazy-rules
                                ></q-input>
    
                                <div class="input-group mb-3 w-100">
    
                                    <div class="col-2 d-block z-2">
                                        <button type="button" @click="slotProps.editItem.qty -= (slotProps.editItem.qty > 0? 1:0)" class="h-100 d-block rounded-0 rounded-start-3 form-control focus-ring-primary">
                                            <i class="bi bi-dash"></i>
                                        </button>
                                    </div>
                                    <div class="col-8 form-control m-0 p-0">
    
                                        <q-input filled v-model.number="slotProps.editItem.qty"
                                                 type="number"
                                                 label="# in stock"
                                                 class="full-width w-100"
                                                 :rules="[val => !!val || 'You need to have a quantity', val => val > 0 || 'Count cannot be less than 0']"
                                                 lazy-rules
                                        ></q-input>
                                    </div>
                                    <div class="col-2 d-block z-2">
                                        <button type="button" @click="slotProps.editItem.qty++" class="h-100 rounded-0 rounded-end-3 form-control focus-ring-primary">
                                            <i class="bi bi-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </edit-modal>
                    </template>
                    <template v-slot="slotProps">
                        <div :class="{'text-warning-emphasis': slotProps.item.needsReorder()}">
                            {{ slotProps.item.qty }}{{ slotProps.item.reorderLevel === -1 || slotProps.item.reorderLevel === undefined || slotProps.item.reorderLevel === null ? "" : "/"+slotProps.item.reorderLevel }} item{{ slotProps.item.qty == 1 ? "" : "s" }} in stock
                            <i v-if="slotProps.item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>
                        </div>
                    </template>
                </cards-list>
                <div class="position-fixed bottom-0 end-0 p-3">
                    <div id="addFab" class="dropup-center dropup rounded-circle">
                        <button class="rounded-circle btn btn-primary end-0 m-4 p-4" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            <span class="d-inline-block fs-5 link-secondary">
                                <i class="bi bi-plus"></i>
                            </span>
                        </button>

                        <ul class="dropdown-menu pe-2"  id="dropupAddHolder">
                            <li>
                                <button type="button" class="btn btn-primary w-100 m-1" data-bs-toggle="modal" data-bs-target="#newCategoryModel">
                                    <a class="icon-link link-secondary text-decoration-none">
                                        <span class="p-2"><i class="bi bi-archive"></i></span>
                                        Category
                                    </a>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-primary w-100 m-1" data-bs-toggle="modal" data-bs-target="#newItemModel">
                                    <a class="icon-link link-secondary text-decoration-none">
                                        <span class="p-2"><i class="bi bi-box"></i></span>
                                        Item
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main-content-page>
    `,
});