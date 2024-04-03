app.component('EditCategoryCard', {
    data() {
        return {
            editCategory: Object.assign(new Category(), this.category),
        }
    },
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
    emits: ['save-it', 'remove-it'],
    methods: {
        // saveItem(item, editItem){
        //     console.log("OOOA:", item);
        //     console.log("OOOB:", this.editItem);
        //     // @@@ TODO: FIX HERE SOMEHOW
        //     this.$emit('save-it', item, this.editItem);
        // },
    },

    template: `
        <edit-card card-component="CategoryCard" :item="category" @save-it="saveItem($event)">
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
