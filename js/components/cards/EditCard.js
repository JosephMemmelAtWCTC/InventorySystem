app.component('EditCard', {
    data() {
        return {
            editItem: {...this.item},
            // editItem: JSON.parse(JSON.stringify(this.item)),
        }
    },
    props: {
        cardComponent: {
            type: String,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
        // editItem: {
        //     type: Object,
        //     required: true,
        // }
    },
    emits: ['save-it', 'remove-it'],
    methods: {
        openEditModal(){
            this.$refs.editModal.openModal();
            // this.editItem = {...this.item};
        },
        saveItem(item){
            console.log("SAVE ITEM");
            this.$emit('save-it', item, this.editItem);
        },
    },
    template: `
<!--TODO: Fix @card-clicked="openEditModal" over @click-->
<!--TODO: Put back item/category string in modal parts-->
        <component :is="cardComponent" :item="item" @click="openEditModal" >
        </component>
        <edit-modal :item="this.editItem"
                    @save-it="saveItem($event)"
                    @remove-it="removeItem"
                    can-remove
                    title="Edit ___"
                    submit-button-text="Update ___"
                    ref="editModal"
        >
            <template v-slot="slotProps">
                <slot name="form">
                </slot>
            </template>
        </edit-modal>
    `,

});
