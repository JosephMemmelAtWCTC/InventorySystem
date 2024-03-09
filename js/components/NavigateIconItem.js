app.component('NavigateIconItem', {
    props: {
        iconClass: {
            type: String,
        },
        badgeText: {
            type: String,
            required: false,
        },
        liExtraClasses: {
            type: String,
            required: false,
        },
    },
    // emits: [],
    // methods: {
    //     sendUpdateEditItem() {
    //         this.$emit('edit-item', this.item);
    //     }
    // },
    template: `
        <div class="nav-item"
        :class="liExtraClasses">
<!--        data-navPageTarget="home"-->
            <button type="button" class="link-secondary primaryNavMovePage position-relative btn btn-primary my-auto h-100 rounded-0 border-start border-end w-100">
                <i class="bi link-secondary"
                    :class="'bi-' + iconClass"
                >
                </i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-black z-2">
                    {{ badgeText }}
                </span>
            </button>
        </div>
    `

});
