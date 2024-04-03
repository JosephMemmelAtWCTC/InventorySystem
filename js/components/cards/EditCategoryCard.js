app.component('EditCategoryCard', {
    data() {
        return {
            editItem: {}
            // editItem: {
            //     title: "LLL",
            //     description: "L2LL",
            // },
            // tempEditItem: {...this.item},
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
        saveItem(item, editItem){
            console.log("OOOA:", item);
            console.log("OOOB:", this.editItem);
            // @@@ TODO: FIX HERE SOMEHOW
            this.$emit('save-it', item, this.editItem);
        },
    },
    created:  function () {
        Object.assign(this.editItem, this.item);
    },

    template: `
        <edit-card card-component="CategoryCard" :item="item" @save-it="saveItem($event)">
            <template #form v-slot="editItem">
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
