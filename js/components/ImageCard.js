app.component('ImageCard', {
    props: {
        headerText: {
            type: String,
            required: false,
        },
        image: {
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
    },
    emits: ['edit-item'],
    methods: {
        sendUpdateEditItem() {
            this.$emit('edit-item', this.item);
        }
    },
    template: `
        <div class="card mb-3" data-bs-toggle="modal" @click="sendUpdateEditItem">
            <slot name="header">
                <div class="card-header bg-transparent text-truncate">2{{ headerText }}</div>
            </slot>
            <img :src="image" class="displayImage card-img-top p-0 m-0 rounded-0 border-bottom mw-100 w-auto" alt="TODO">
            <div class="card-body overflow-y-scroll">
                <slot name="description">
                    <p class="card-text">{{ descriptionText }}</p>
                </slot>
            </div>
            <div class="card-footer bg-transparent">
<!--                    <div v-html="footerInfo(item)"></div>-->
                <slot name="footer">
                    <slot name="footer">
                        {{ footerText }}                    
                    </slot>
<!--                    <span v-if="!('items' in item)" v-bind:class="{'text-warning-emphasis': item.needsReorder()}" >-->
<!--                        {{ item.qty }}{{ item.reorderLevel === -1 || item.reorderLevel === undefined || item.reorderLevel === null ? "": "/"+item.reorderLevel}} item{{item.qty==1? "":"s"}} in stock-->
<!--                        <i v-if="item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>-->
<!--                    </span>-->
<!--                    <span v-else>-->
<!--                        {{ item.items.length }} unique item{{ item.items.length === 1? "":"s" }}-->
<!--                    </span>-->
                </slot>
            </div>
        </div>
        
    `
});
