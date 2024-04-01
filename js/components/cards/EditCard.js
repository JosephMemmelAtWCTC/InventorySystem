app.component('EditCard', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
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
        <template #card @click="">
        </template>
    `,

});
