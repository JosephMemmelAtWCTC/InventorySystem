app.component('ItemCard', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
        }
    },
    props: {
        headerText: {
            type: String,
            required: false,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        descriptionText: {
            type: String,
            required: false,
        },
        footerText: {
            type: String,
            required: false,
        },
        item: {
            type: Object,
            required: false,
        },
    },
    emits: ['card-clicked'],
    methods: {
        sendUpdateCardClicked() {
            if(this.item){
                this.$emit('card-clicked', this.item);
            }else{
                this.$emit('card-clicked');
            }
        }
    },
    template: `
<!--@@@ TODO:, convert .products to  a get with model structure methods-->
        <image-card 
            @card-clicked="passCardWasClickedUp"
            :imageSrc="item.product.imageSrc"
            :item="item"
            :headerText="item.product.title"
            :descriptionText="item.product.description"
            class="my-1"
            wrapper-class="animate-pop-in hover-expand"
            card-height="450px"
            v-slot="slotProps"
        >
            <slot :item="slotProps.item">
                <div :class="{'text-warning-emphasis': slotProps.item.hasLowStock}">
                    {{ slotProps.item.inStockLevel }}{{ slotProps.item.reorderLevel === -1 || slotProps.item.reorderLevel === undefined || slotProps.item.reorderLevel === null ? "" : "/"+slotProps.item.reorderLevel }} item{{ slotProps.item.inStockLevel == 1 ? "" : "s" }} in stock
                    <i v-if="slotProps.item.hasLowStock" class="bi bi-exclamation-diamond-fill"></i>
                </div>
            </slot>
            <slot name="extra" :item="slotProps.item">
                
            </slot>
        </image-card>
    `,

});
