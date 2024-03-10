app.component('ImageCard', {
    data(){
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
        }
    },
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
            <slot name="footer" :uid="uid">{{uid}}</slot>

<!--                <slot name="footer" :uid="uid">-->
<!--                    {{ footerText }}-->
<!--&lt;!&ndash;                    <span v-if="!('items' in item)" v-bind:class="{'text-warning-emphasis': item.needsReorder()}" >&ndash;&gt;-->
<!--&lt;!&ndash;                        {{ item.qty }}{{ item.reorderLevel === -1 || item.reorderLevel === undefined || item.reorderLevel === null ? "": "/"+item.reorderLevel}} item{{item.qty==1? "":"s"}} in stock&ndash;&gt;-->
<!--&lt;!&ndash;                        <i v-if="item.needsReorder()" class="bi bi-exclamation-diamond-fill"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--&lt;!&ndash;                    <span v-else>&ndash;&gt;-->
<!--&lt;!&ndash;                        {{ item.items.length }} unique item{{ item.items.length === 1? "":"s" }}&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--                </slot>-->
            </div>
        </div>
        
    `
});
