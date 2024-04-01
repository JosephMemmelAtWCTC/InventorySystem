app.component('EditCategoryCard', {
    data() {
        return {
            editItem: null,
        }
    },
    props: {
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
    },
    template: `
        <edit-card card-component="CategoryCard" :item="item">
        A_ISJKSNLSKNS
            <template #form>
                ISJKSNLSKNS
            </template>
        </edit-card>
    `,

});
