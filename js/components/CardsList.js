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
            console.log("Saved send up CardsList", item);
            this.$emit('save-it', item);
            // this.$forceUpdate();

            // console.log("Saved send up CardsList - item.constructor",item.constructor);
            // this.$emit('save-it', Object.assign(new item.constructor, item));

        },
        removeItem(item){
            console.log("Removed send up CardsList");
            this.$emit('remove-it', item);
        },
    },
    template: `
<!--TODO: Turn all :keys to use $refs-->
        <component v-for="(item, i) in items" :key="i"
                   :is="item.constructor.cardDetailsComponent"
                   :item="item"
                   :edit-item="item"
                   @save-it="saveItem"
                   @remove-it="removeItem">
        </component>
<!--                <p v-for="(item, i) in items" :key="item.title"-->
<!--        >{{item.constructor.cardDetailsComponent}}</p>-->
    `
});