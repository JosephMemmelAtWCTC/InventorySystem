app.component('CategoryCard', {
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
        wrapperClass: {
            type: String,
            required: false,
        },
        cardHeight: {
            type: String,
            required: false,
        }
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
        <image-card 
            @card-clicked="passCardWasClickedUp"
            :imageSrc="item.imageSrc"
            :item="item"
            :headerText="item.title"
            :descriptionText="item.description"
            class="my-1"
            wrapper-class="animate-pop-in hover-expand"
            card-height="450px"
            v-slot="slotProps"
        >
            <slot :item="slotProps.item">
                {{ slotProps.item.items.length }} unique item{{ slotProps.item.items.length === 1? "":"s" }}
            </slot>
            <slot name="extra" :item="slotProps.item">
                
            </slot>
        </image-card>
    `,

});
