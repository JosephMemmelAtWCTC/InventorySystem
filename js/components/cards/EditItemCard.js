app.component('editItemCard', {
    data() {
        return {
            editItem: null,
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    emits: ['save-it', 'remove-it'],
    methods: {
        saveItem(item){
            console.log("OOOA:", item);
            // console.log("OOOB:", this.editItem);
            // @@@ TODO: FIX HERE SOMEHOW
            this.$emit('save-it', [this.item, this.editItem]);
        },
        removeItem(item){
            this.$emit('remove-it', this.item);
        },
    },
    created: function () {
        this.editItem = Object.assign(new Item(), this.item);
        // console.log('{{{}}}', this.item);
    },
    template: `
        <edit-card card-component="ItemCard" :item="this.item" @save-it="saveItem" @remove-it="removeItem">
            <template #form v-slot="editItem">
                <q-input filled v-model="editItem.title"
                         label="Name"
                         class="full-width"
                         autofocus
                         :rules="[val => !!val || '* Required']"
                         lazy-rules
                ></q-input>
                <q-input filled v-model="editItem.productId"
                         label="Product ID"
                         class="full-width"
                         :rules="[val => !!val || '* Required']"
                         lazy-rules
                ></q-input>
                <q-input filled v-model="editItem.description"
                         type="textarea"
                         rows="4"
                         label="Description"
                         class="full-width"
                         :rules="[val => !!val || '* Required']"
                         lazy-rules
                ></q-input>
<!--                <q-input filled v-model.number="editItem.reorderLevel"-->
<!--                        type="number"-->
<!--                        label="Reorder Level"-->
<!--                        class="full-width clearable"-->
<!--                        clearable-->
<!--                        clear-icon="bi-x"-->
<!--                        placeholder="Leave blank to ignore reorder"-->
<!--                        :rules="[val => val >= 0 || 'Count cannot be less than 0']"-->
<!--                        lazy-rules-->
<!--                ></q-input>-->
                <q-input filled v-model.number="editItem.reorderLevel"
                         type="number"
                         label="Reorder Level"
                         clearable
                         clear-icon="bi-x"
                         placeholder="Leave blank to ignore reorder"
                         class="full-width clearable"
                         :rules="[val => val >= 0 || 'Count cannot be less than 0']"
                         lazy-rules
                ></q-input>
                <div class="input-group mb-3 w-100">

                    <div class="col-2 d-block z-2">
                        <button type="button" @click="editItem.inStockQty -= (slotProps.editItem.qty > 0? 1:0)" class="h-100 d-block rounded-0 rounded-start-3 form-control focus-ring-primary">
                            <i class="bi bi-dash"></i>
                        </button>
                    </div>
                    <div class="col-8 form-control m-0 p-0">

                        <q-input filled v-model.number="editItem.inStockQty"
                                 type="number"
                                 label="# in stock"
                                 class="full-width w-100"
                                 :rules="[val => !!val || 'You need to have a quantity', val => val > 0 || 'Count cannot be less than 0']"
                                 lazy-rules
                        ></q-input>
                    </div>
                    <div class="col-2 d-block z-2">
                        <button type="button" @click="editItem.inStockQty++" class="h-100 rounded-0 rounded-end-3 form-control focus-ring-primary">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </template>
        </edit-card>
<!--        <p>TEST</p> @@@ ASK WHY IT CRASHES-->
   
    `,

});
