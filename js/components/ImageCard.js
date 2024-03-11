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
        image: {
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
        }
    },
    emits: ['card-clicked'],
    methods: {
        sendUpdateCardClicked() {
            console.log("-~~~");
            if(this.item){
                this.$emit('card-clicked', this.item);
            }else{
                this.$emit('card-clicked');
            }
        }
    },
    template: `
        <div class="card mb-3 " @click="sendUpdateCardClicked">
<!--            data-bs-toggle="modal"-->
            <slot name="header">
                <div class="card-header bg-transparent text-truncate">{{ headerText }}</div>
            </slot>
            <img :src="image" class="displayImage card-img-top p-0 m-0 rounded-0 border-bottom mw-100 w-auto" alt="TODO">
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
    `,

});
