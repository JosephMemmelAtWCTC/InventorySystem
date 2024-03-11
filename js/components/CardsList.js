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
    emits: ['card-clicked'],
    methods: {
        // cardWasClicked(sendItem){
        //     console.log("card-clicked", sendItem)
        //     this.$emit('card-clicked', sendItem);
        // }
    },
    template: `
<!--:footerInfo="footerInfo"-->
<!--        <card-item v-for="(card, i) in items" @edit-item="cardWasClicked" :key="card.title" :item="card" :target-model-selector="targetModelSelector" class="col">-->
<!--            <template #footer>-->
<!--                <slot name="footer">-->
<!--                </slot>-->
<!--            </template>-->
<!--        </card-item>-->

<!--        @card-clicked="cardWasClicked"-->
        <image-card v-for="(item, i) in items" :key="item.title"

        :image="item.image"
        :item="item"
        :headerText="item.title"
        :descriptionText="item.description"
        class="col"
        v-slot="slotProps">
<!--            <slot :item="uid">{{slotProps.item.name}}</slot>-->
<!--            <slot :item="this.item"></slot>-->
<!--            <slot></slot>-->
            <slot :item="slotProps.item">
<!--                <slot name="footer" :item="item">-->
<!--                </slot>-->
            </slot>
        </image-card>
    `
});