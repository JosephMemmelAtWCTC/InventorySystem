app.component('EditCategoryCard', {
    data() {
        return {
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    emits: [],
    methods: {
    },
    created:  function () {
        this.editItem = {...this.item};
    },
    template: `
        <edit-card card-component="CategoryCard" :item="item" :editItem="editItem">
            <template #form>
                <q-input filled v-model="editItem.title"
                             autofocus
                             label="Name"
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
            </template>
        </edit-card>
    `,

});
