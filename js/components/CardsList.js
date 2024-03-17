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
<!--TODO: Turn all :keys to use $refs-->

        <image-card v-for="(item, i) in items" :key="item.title"
        @card-clicked="passCardWasClickedUp"
        :image="item.image"
        :item="item"
        :headerText="item.title"
        :descriptionText="item.description"
        class="m-1"
        wrapperClass="col-1 col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2 m-1"
        v-slot="slotProps">
            <slot :item="slotProps.item">
            </slot>
            <slot name="extra" :item="slotProps.item">
                
            </slot>
        </image-card>
    `
});