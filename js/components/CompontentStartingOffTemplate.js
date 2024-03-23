app.component('ComponentStartingOffTemplate', {
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
                this.$emit('example', '');
            },
        },
    },
    computed: {
    },
    template: `
        <slot name="">
        </slot>
    `,
});