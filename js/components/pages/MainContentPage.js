app.component('MainContentPage', {
    data: function () {
        return {
        };
    },
    props: {
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
            },
        },
    },
    computed: {
    },
    template: `
        <div class="m-2">
            <slot>
            </slot>
        </div>
    `,
});