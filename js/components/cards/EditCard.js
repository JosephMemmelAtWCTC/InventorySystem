app.component('EditCard', {
    data() {
        return {
            editItem: null,
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
    `,

});
