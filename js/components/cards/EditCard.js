app.component('EditCard', {
    data() {
        return {
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
        editCopy: {//Because I use template/slot variables- TODO: Ask
            type: Object,
            required: true,
        },
    },
    emits: ['opened-modal', 'save-it', 'remove-it'],
    methods: {
        openEditModal(){
            this.$refs.editModal.openModal();
            this.$emit('opened-modal');
        },

        saveItem(item){
            console.log("SAVE ITEMA",item);
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
        <edit-modal :item="this.editCopy"
                    @opened-modal="this.updateItemCopy"
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
