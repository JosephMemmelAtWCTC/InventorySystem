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
        iconContent: {
            type: String,
            required: false,
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
            <button type="button" class="fw-bold link-secondary primaryNavMovePage position-relative btn btn-primary my-auto h-100 rounded-0 border-start border-end w-100">
                <i class="link-secondary"
                    :class="iconClass"
                >
                <span>{{iconContent}}</span>
                </i>
                <Transition name="slide-fade">
                    <span v-if="hover" class="animationText ms-2">{{tooltipInfo}}</span>
                </Transition>
<!--                <q-tooltip v-if="tooltipInfo" anchor="center right" self="center left" :offset="[10, 10]">-->
<!--                  <strong>{{tooltipInfo}}</strong>-->
<!--&lt;!&ndash;                  (<q-icon name="keyboard_arrow_right"/>)&ndash;&gt;-->
<!--                </q-tooltip>-->
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-black z-2">
                    {{ badgeText }}
                </span>
            </button>
        </div>
    `

});
