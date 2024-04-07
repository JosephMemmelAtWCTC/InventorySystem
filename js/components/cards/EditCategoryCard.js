app.component('EditCategoryCard', {
    data() {
        return {
            editCategory: null,
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
            // console.log("OOOB:", this.editCategory);
            // @@@ TODO: FIX HERE SOMEHOW
            this.$emit('save-it', [this.item, this.editCategory]);
        },
        removeItem(item){
            this.$emit('remove-it', this.item);
        },
        updateEditCategoryToValues(){
            this.editCategory = Object.assign(new Category(), this.item);
        },
    },
    created: function () {
        this.editCategory = Object.assign(new Category(), this.item);
        // console.log('{{{}}}', this.item);
    },
    template: `
        <edit-card card-component="CategoryCard"
                   :edit-copy="editCategory"
                   :item="this.item"
                   @save-it="saveItem"
                   @remove-it="removeItem"
                   @opened-modal="updateEditCategoryToValues">
            <template #form v-slot="editCategory">
                <q-input filled v-model="editCategory.title"
                         autofocus
                         label="Name"
                         class="full-width"
                         :rules="[val => !!val || '* Required']"
                         lazy-rules
                ></q-input>
                <q-input filled v-model="editCategory.description"
                         type="textarea"
                         rows="4"
                         label="Description"
                         class="full-width"
                         :rules="[val => !!val || '* Required']"
                         lazy-rules
                ></q-input>
            </template>
        </edit-card>
<!--        <p>TEST</p> @@@ ASK WHY IT CRASHES-->
    `,

});
