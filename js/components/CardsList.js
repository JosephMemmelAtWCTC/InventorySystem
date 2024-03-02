app.component('CardsList', {
    props: {
        items: {
            type: Array,
            required: true,
        },
        footerInfo: {
            type: Function,
            required: true,
        }
    },
    template: `
        <card-item v-for="(card, i) in items" :key="card.title" :item="card" :footerInfo="footerInfo" class="col">
        </card-item>
    `
});