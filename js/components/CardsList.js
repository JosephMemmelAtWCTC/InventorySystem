app.component('CardsList', {
    props: {
        items: {
            type: Array,
            required: true,
        },
        // footerInfo: {
        //     type: Function,
        //     required: true,
        // },
    },
    emits: ['save-it', 'remove-it'],
    methods: {
        saveItem(item){
            this.$emit('save-it', item);
        },
    },
    template: `
<!--TODO: Turn all :keys to use $refs-->
        <component v-for="(item, i) in items" :key="item.title"
                   :is="item.constructor.cardDetailsComponent"
                   :item="item"
                   :edit-item="item"
                   @save-it="saveItem">
        </component>
    `
});