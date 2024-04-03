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
    emits: ['save-it', 'remove-it'],
    methods: {
        saveItem(item, editItem){
            this.$emit('save-it', item, editItem);
        },
    },
    template: `
<!--TODO: Turn all :keys to use $refs-->
<!--    <transition-group name="fade" tag="div">    -->
<!--        <div class="row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">-->

        <component v-for="(item, i) in items" :key="item.title"
                   :is="item.constructor.cardDetailsComponent"
                   :item="item"
                   :edit-item="item"
                   @save-it="saveItem($event)"
                   image-src="https://via.placeholder.com/400.png?text=Placeholder">
                   
        </component>
<!--        </div>-->
<!--    </transition-group>-->

    `
});