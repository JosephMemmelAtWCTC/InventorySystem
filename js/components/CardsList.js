app.component('CardsList', {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    template: `
        <div v-for="(card, i) in items" :key="card.title" class="col">
            <div class="card mb-3">
                <div class="card-header bg-transparent text-truncate">{{card.title}}</div>
                <img :src="card.image" class="displayImage card-img-top p-0 m-0 rounded-0 border-bottom mw-100 w-auto" alt="Folder">
                <div class="card-body overflow-y-scroll"><!--overflow-x-scroll-->
                    <p class="card-text">{{ card.description }}</p>
                </div>
                <div class="card-footer bg-transparent">{{ card.items.length }} unique item{{ card.items.length === 1? "":"s" }}</div>
            </div>
        </div>
    `
});