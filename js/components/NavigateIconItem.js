app.component('NavigateIconItem', {
    data() {
        return {
            hover: false,
        }
    },
    props: {
        iconClass: {
            type: String,
        },
        badgeText: {
            type: String,
            required: false,
        },
        tooltipInfo: {
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
<!--https://michaelnthiessen.com/hover-in-vue/ for hover-->
        <div class="nav-item"
        :class="liExtraClasses" @mouseover="hover=true" @mouseleave="hover=false">
<!--        data-navPageTarget="home"-->
            <button type="button" class="link-secondary primaryNavMovePage position-relative btn btn-primary my-auto h-100 rounded-0 border-start border-end w-100">
                <i class="bi link-secondary"
                    :class="'bi-' + iconClass"
                >
                </i>
                <span v-if="hover" class="ms-2">{{tooltipInfo}}</span>
                <q-tooltip v-if="tooltipInfo" anchor="center right" self="center left" :offset="[10, 10]">
                  <strong>{{tooltipInfo}}</strong>
<!--                  (<q-icon name="keyboard_arrow_right"/>)-->
                </q-tooltip>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-black z-2">
                    {{ badgeText }}
                </span>
            </button>
        </div>
    `

});
