// TODO: Will make this better done with the new revisiting component design so things will be less hardcoded
app.component('OptionsFAB', {
    data: function () {
        return {
        };
    },
    props: {
        positionClasses: {
            type: String,
            required: false,
            default: "",
        //     TODO: Make easy selection for top/bottom & start/end
        },
        zIndex: {
            type: Number,
            required: false,
            default: 1001,
        },
        symbolClasses: {
            type: String,
            required: true,
        }
    },
    methods: {
    },
    created:  function () {
    },
    mounted: function () {
    },
    emits: [],
    watch: {
        example: {
            handler() {
                this.$emit('example', '');
            },
        },
    },
    computed: {
    },
    template: `
<!--        <slot name="">-->
<!--        </slot>-->
        <div class="dropup-center dropup rounded-circle fab" :style="'z-index='+zIndex">
            <button class="rounded-circle btn btn-primary end-0 m-4 p-4" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                <span class="d-inline-block fs-5 link-secondary">
                    <i :class="symbolClasses">
                    </i>
                </span>
            </button>

<!--TODO REMOVE ID- used for styling-->
            <ul class="dropdown-menu pe-2"  id="dropupAddHolder">
                <slot name="open">
   
                </slot>
            </ul>
        </div>
    `,
});