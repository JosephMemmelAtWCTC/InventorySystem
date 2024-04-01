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

        <component v-for="(item, i) in items" :key="item.title" :is="item.constructor.cardDetailsComponent" :item="item">
        
        </component>
<!--        </div>-->
<!--    </transition-group>-->

    `
});