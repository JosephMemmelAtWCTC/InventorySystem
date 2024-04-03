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
            console.log("SAVE ITEMA",item);
            console.log("SAVE ITEMB",this.editItem);
            // TODO: Make object instead of a list
            this.$emit('save-it', [item, this.editItem]);
        },
        removeItem(item){
            this.$emit('remove-it', item);
        },
    },
    template: `
<!--TODO: Fix @card-clicked="openEditModal" over @click-->
<!--TODO: Put back item/category string in modal parts-->
        <component :is="cardComponent" :item="item" @click="openEditModal" >
        </component>
        <edit-modal :item="this.editItem"
                    @save-it="saveItem"
                    @remove-it="removeItem"
                    can-remove
                    :title="'Edit '+'Category'"
                    :submit-button-text="'Update '+'Category'"
                    ref="editModal"
        >
<!--        TODO: Move category to slots with editModal-->
            <template v-slot="slotProps">
                <slot name="form">
                </slot>
            </template>
        </edit-modal>
    `,

});
