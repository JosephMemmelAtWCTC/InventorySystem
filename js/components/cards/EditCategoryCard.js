app.component('EditCategoryCard', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
            editCategory: null,
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    emits: ['card-clicked'],
    methods: {
        openEditModal(){
            console.log("openEditModalopenEditModalopenEditModalopenEditModalopenEditModalopenEditModalopenEditModalopenEditModal");
            this.$refs.editModal.openModal();
        },
        sendUpdateCardClicked() {
            if(this.item){
                this.$emit('card-clicked', this.item);
            }else{
                this.$emit('card-clicked');
            }
        },
    },
    template: `
<!--TODO: Fix @card-clicked="openEditModal" over @click-->
        <category-card :item="item" @click="openEditModal">
        </category-card>
<!--        <template #extra v-slot="slotProps">-->
        <edit-modal :item="this.editItem"
                    @remove-it="removeItem"
                    can-remove
                    title="Edit Item"
                    :submit-button-text="'Update Item'"
                    ref="editModal"
        ></edit-modal>
    `,

});
