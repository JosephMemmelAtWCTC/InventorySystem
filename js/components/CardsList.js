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
        passCardWasClickedUp(sendItem){
            console.log("card-clicked{{{{{{{{", sendItem)
            this.$emit('card-clicked', sendItem);
        }
    },
    template: `
<!--:footerInfo="footerInfo"-->
<!--        <card-item v-for="(card, i) in items" @edit-item="passCardWasClickedUp" :key="card.title" :item="card" :target-model-selector="targetModelSelector" class="col">-->
<!--            <template #footer>-->
<!--                <slot name="footer">-->
<!--                </slot>-->
<!--            </template>-->
<!--        </card-item>-->

<!--        @card-clicked="passCardWasClickedUp"-->

        <image-card v-for="(item, i) in items" :key="item.title"
        @card-clicked="passCardWasClickedUp"
        :image="item.image"
        :item="item"
        :headerText="item.title"
        :descriptionText="item.description"
        class="m-1"
        v-slot="slotProps">
<!--                class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 m-1"-->

<!--            <slot :item="uid">{{slotProps.item.name}}</slot>-->
<!--            <slot :item="this.item"></slot>-->
<!--            <slot></slot>-->
            <slot :item="slotProps.item">
<!--                <slot name="footer" :item="item">-->
<!--                </slot>-->
            </slot>
            <slot name="extra" :item="slotProps.item">
                
            </slot>
        </image-card>
    `
});