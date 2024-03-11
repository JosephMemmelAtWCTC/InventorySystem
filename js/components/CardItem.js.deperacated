app.component('CardItem', {
    props: {
        item: {
            type: Object,
            required: true,
        },
        targetModelSelector: {
            type: String,
            required: true,
        }
    },
    emits: ['edit-item'],
    methods: {
        sendUpdateEditItem() {
            this.$emit('edit-item', this.item);
        }
    },
    template: `
        <div class="card mb-3" data-bs-toggle="modal" :data-bs-target="targetModelSelector" @click="sendUpdateEditItem">
            <div class="card-header bg-transparent text-truncate">{{ item.title }}</div>
            <img :src="item.image" class="displayImage card-img-top p-0 m-0 rounded-0 border-bottom mw-100 w-auto" alt="TODO">
            <div class="card-body overflow-y-scroll"><!--overflow-x-scroll-->
                <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-footer bg-transparent">
<!--                    <div v-html="footerInfo(item)"></div>-->
                <slot name="footer">
                <!--TODO: Have to get working properly, this is not how it should be, the checks should not be here with v-if-->
                    <span v-if="!('items' in item)" v-bind:class="{'text-warning-emphasis': item.needsReorder()}" >
                        {{ item.qty }}{{ item.reorderLevel === -1 || item.reorderLevel === undefined || item.reorderLevel === null ? "": "/"+item.reorderLevel}} item{{item.qty==1? "":"s"}} in stock
                        <i v-if="item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>
                    </span>
                    <span v-else>
                        {{ item.items.length }} unique item{{ item.items.length === 1? "":"s" }}
                    </span>
                </slot>
            </div>
        </div>
        
    `
});
