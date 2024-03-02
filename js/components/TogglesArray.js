// This will be used as <toggles-array>
app.component('ShoppingList', {
    props: {
        // title: {
        //     type: String,
        //     default: 'Get It',
        // },
        items: {
            type: Array,
            required: true,
        },
    },
    template: `
        <div class="btn-group" role="group" aria-label="Checkbox button filter options">
    `,

//         <div class="get-it-list">
//     <h3>{{ title }}</h3>
// <ul class="list-group list-group-flush border-bottom">
//     <shopping-list-item v-for="(item, i) in items"
//     :key="item.name"
//     :item="item"
//     @remove-item="(emittedItem) => {$emit('removeItem', emittedItem)}"
//     ></shopping-list-item>
// </ul>
// <p>
//     <small>Total: {{ items.length }}</small>
// </p>
// </div>
});