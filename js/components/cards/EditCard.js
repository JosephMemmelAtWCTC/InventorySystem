app.component('EditCard', {
    data() {
        return {
            editItemNotTemplate: {},
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
        editItem: {
            type: Object,
            required: true,
        }
    },
    emits: [],
    methods: {
        openEditModal(){
            this.$refs.editModal.openModal();
        },
    },
    template: `
<!--TODO: Fix @card-clicked="openEditModal" over @click-->
<!--TODO: Put back item/category string in modal parts-->
        <component :is="cardComponent" :item="item" @click="openEditModal">
        </component>
        <edit-modal :item="this.editItem"
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
