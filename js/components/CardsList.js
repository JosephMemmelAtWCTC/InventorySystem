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
<!--    <transition-group name="fade" tag="div">    -->
<!--        <div class="row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">-->
            <image-card v-for="(item, i) in items" :key="item.title"
                @card-clicked="passCardWasClickedUp"
                :image="item.image"
                :item="item"
                :headerText="item.title"
                :descriptionText="item.description"
                class="my-1"
                wrapper-class="animate-pop-in hover-expand"
                card-height="450px"
                v-slot="slotProps"
            >
                <slot :item="slotProps.item">
                
                </slot>
                <slot name="extra" :item="slotProps.item">
                
                </slot>
            </image-card>
<!--        </div>-->
<!--    </transition-group>-->

    `
});