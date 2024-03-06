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
        targetModelSelector: {
            type: String,
            required: false,
        }
    },
    emits: ['edit-item'],
    methods: {
        sendUpdateEditItem(sendItem){
            console.log("QQQQQQQQQQ ", sendItem)
            this.$emit('edit-item', sendItem);
        }
    },
    template: `
<!--:footerInfo="footerInfo"-->
        <card-item v-for="(card, i) in items" @edit-item="sendUpdateEditItem" :key="card.title" :item="card" :target-model-selector="targetModelSelector" class="col">
            <template #footer>
                <slot name="footer">
                </slot>
            </template>
        </card-item>
    `
});