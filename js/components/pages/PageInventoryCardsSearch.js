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
        currentCategoriesList: {
            type: Array,
            required: true,
        },
        currentItemsList: {
            type: Array,
            required: true,
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
                :display-is-empty="currentCategoriesList.length === 0 && currentItemsList.length === 0"
                empty-title="Whoops"
                empty-text="It looks like there are no results that fit your search criteria, try loosing your requirements or adding more items."
            >
            </results-possibly-empty>
            <div class="row g-2 m-1 row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">

                    <cards-list v-bind:items="currentCombinedItemsList"
                                @card-clicked="this.editItem = $event;
                                this.$nextTick(() => {
                                    this.$refs.editModal.openModal();
                                });"
                    >
                    </cards-list>



<!--                <cards-list v-bind:items="currentCategoriesList"-->
<!--                            @card-clicked="this.editCategory = $event;-->
<!--                            this.$nextTick(() => {-->
<!--                                this.$refs.editModal.openModal();-->
<!--                            });"-->
<!--                >-->
<!--                    <template #extra v-slot="slotProps">-->
<!--                        <edit-modal :item="this.editCategory"-->
<!--                                    @remove-it="removeCategory"-->
<!--                                    can-remove-->
<!--                                    title="Edit Category"-->
<!--                                    :submit-button-text="'Update Category'"-->
<!--                                    ref="editModal"-->
<!--                        >-->
<!--                            <template v-slot="slotProps">-->
<!--                                <q-input filled v-model="slotProps.editItem.title"-->
<!--                                         autofocus-->
<!--                                         label="Name"-->
<!--                                         class="full-width"-->
<!--                                         :rules="[val => !!val || '* Required']"-->
<!--                                         lazy-rules-->
<!--                                ></q-input>-->
<!--                                <q-input filled v-model="slotProps.editItem.description"-->
<!--                                         type="textarea"-->
<!--                                         rows="4"-->
<!--                                         label="Description"-->
<!--                                         class="full-width"-->
<!--                                         :rules="[val => !!val || '* Required']"-->
<!--                                         lazy-rules-->
<!--                                ></q-input>-->
<!--                            </template>-->
<!--                        </edit-modal>-->
<!--                    </template>-->
<!--    -->
<!--                    <template v-slot="slotProps">-->
<!--    &lt;!&ndash;                            <div :class="{'text-warning-emphasis': slotProps.item.needsReorder()}">&ndash;&gt;-->
<!--                            {{ slotProps.item.items.length }} unique item{{ slotProps.item.items.length === 1? "":"s" }}-->
<!--    &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                    </template>-->
<!--                </cards-list>-->
<!--                -->
<!--                &lt;!&ndash; https://stackoverflow.com/a/65686099 for inline editing &ndash;&gt;-->
<!--                &lt;!&ndash; https://masteringjs.io/tutorials/vue/nexttick for waiting until the next tick to open with the changed value &ndash;&gt;-->
<!--                <cards-list v-bind:items="currentItemsList"-->
<!--                            @card-clicked="this.editItem = $event;-->
<!--                            this.$nextTick(() => {-->
<!--                                this.$refs.editModal.openModal();-->
<!--                            });"-->
<!--                >-->
<!--                    <template #extra v-slot="slotProps">-->
<!--                        &lt;!&ndash;TODO: Can I pass in an emit here for can-remove?&ndash;&gt;-->
<!--                        <edit-modal :item="this.editItem"-->
<!--                                    @remove-it="removeItem"-->
<!--                                    can-remove-->
<!--                                    title="Edit Item"-->
<!--                                    :submit-button-text="'Update Item'"-->
<!--                                    ref="editModal"-->
<!--                        >-->
<!--                            <template v-slot="slotProps">-->
<!--                                <q-input filled v-model="slotProps.editItem.title"-->
<!--                                         label="Name"-->
<!--                                         class="full-width"-->
<!--                                         autofocus-->
<!--                                         :rules="[val => !!val || '* Required']"-->
<!--                                         lazy-rules-->
<!--                                ></q-input>-->
<!--                                <q-input filled v-model="slotProps.editItem.productId"-->
<!--                                         label="Product ID"-->
<!--                                         class="full-width"-->
<!--                                         :rules="[val => !!val || '* Required']"-->
<!--                                         lazy-rules-->
<!--                                ></q-input>-->
<!--                                <q-input filled v-model="slotProps.editItem.description"-->
<!--                                         type="textarea"-->
<!--                                         rows="4"-->
<!--                                         label="Description"-->
<!--                                         class="full-width"-->
<!--                                         :rules="[val => !!val || '* Required']"-->
<!--                                         lazy-rules-->
<!--                                ></q-input>-->
<!--                                <q-input filled v-model.number="slotProps.editItem.reorderLevel"-->
<!--                                        type="number"-->
<!--                                        label="Reorder Level"-->
<!--                                        class="full-width clearable"-->
<!--                                        clearable-->
<!--                                        clear-icon="bi-x"-->
<!--                                        placeholder="Leave blank to ignore reorder"-->
<!--                                        :rules="[val => val >= 0 || 'Count cannot be less than 0']"-->
<!--                                        lazy-rules-->
<!--                                ></q-input>-->
<!--    -->
<!--                                <div class="input-group mb-3 w-100">-->
<!--    -->
<!--                                    <div class="col-2 d-block z-2">-->
<!--                                        <button type="button" @click="slotProps.editItem.qty -= (slotProps.editItem.qty > 0? 1:0)" class="h-100 d-block rounded-0 rounded-start-3 form-control focus-ring-primary">-->
<!--                                            <i class="bi bi-dash"></i>-->
<!--                                        </button>-->
<!--                                    </div>-->
<!--                                    <div class="col-8 form-control m-0 p-0">-->
<!--    -->
<!--                                        <q-input filled v-model.number="slotProps.editItem.qty"-->
<!--                                                 type="number"-->
<!--                                                 label="# in stock"-->
<!--                                                 class="full-width w-100"-->
<!--                                                 :rules="[val => !!val || 'You need to have a quantity', val => val > 0 || 'Count cannot be less than 0']"-->
<!--                                                 lazy-rules-->
<!--                                        ></q-input>-->
<!--                                    </div>-->
<!--                                    <div class="col-2 d-block z-2">-->
<!--                                        <button type="button" @click="slotProps.editItem.qty++" class="h-100 rounded-0 rounded-end-3 form-control focus-ring-primary">-->
<!--                                            <i class="bi bi-plus"></i>-->
<!--                                        </button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </template>-->
<!--                        </edit-modal>-->
<!--                    </template>-->
<!--                </cards-list>-->
                
            </div>
            <slot name="extra">
            </slot>
        </main-content-page>
    `,
});