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
        },
        zIndex: {
            type: Number,
            required: false,
            default: 1001,
        },
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
        <div id="addFab" class="dropup-center dropup rounded-circle" :style="'z-index='+zIndex">
            <button class="rounded-circle btn btn-primary end-0 m-4 p-4" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                <span class="d-inline-block fs-5 link-secondary">
                    <i class="bi bi-plus"></i>
                </span>
            </button>

<!--TODO REMOVE ID- used for styling-->
            <ul class="dropdown-menu pe-2"  id="dropupAddHolder">
                <li v-for>
                
                                        <div v-for="(item, i) in recentItemsList" :key="item.id" class="py-2 rounded-0 row bg-body-tertiary border-2 border-primary border-bottom"><!--card-->

                    <button type="button" class="btn btn-primary w-100 m-1" data-bs-toggle="modal" data-bs-target="#newCategoryModel">
                        <a class="icon-link link-secondary text-decoration-none">
                            <span class="p-2"><i class="bi bi-archive"></i></span>
                            Category
                        </a>
                    </button>
                </li>
                <li>
                    <button type="button" class="btn btn-primary w-100 m-1" data-bs-toggle="modal" data-bs-target="#newItemModel">
                        <a class="icon-link link-secondary text-decoration-none">
                            <span class="p-2"><i class="bi bi-box"></i></span>
                            Item
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    `,
});