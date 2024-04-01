app.component('ImageCard', {
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
            type: String,  // Change the type to String
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
        <div :class="wrapperClass">
            <div class="card" @click="sendUpdateCardClicked" :style="'height:'+cardHeight">
    <!--            data-bs-toggle="modal"-->
                <slot name="header">
                    <div class="card-header bg-transparent text-truncate">{{ headerText }}</div>
                </slot>
                <img :src="image" class="displayImage p-0 m-0 rounded-0 border-bottom w-auto" alt="Loading..."><!--TODO:-->
                <div class="card-body overflow-y-scroll">
                    <slot name="description">
                        <p class="card-text">{{ descriptionText }}</p>
                    </slot>
                </div>
                <div class="card-footer bg-transparent">
                    <slot :item="item">
                        {{ footerText }} <!-- Display the footerText directly -->
                    </slot>
                </div>
            </div>
        </div>
    `,

});
