app.component('EditModal', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
        }
    },
    props: {
        newItem: {
            type: Object,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        submitButtonText: {
            type: String,
            required: true,
        },
    },
    methods: {
    },
    template: `
        <p>{{newItem.title}}</p>
    `,

});
