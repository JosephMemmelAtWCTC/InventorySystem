app.component('ResultsPossiblyEmpty', {
    data(){
        return {
        }
    },
    props: {
        displayIsEmpty: {
            type: Boolean,
            required: false,
            default: false,
        },
        emptyTitle: {
            type: String,
            required: false,
        },
        emptyText: {
            type: String,
            required: false,
        },
        // Less needed
        displayNumber: {
            type: Number,
            default: 6,
        },

        // displayIsEmpty: {
        //     type: Function,
        //     required: false,
        //     default: () => { return false; }
        // }
    },
    template: `
       <div v-if="displayIsEmpty">
            <div class="jumbotron m-4">
                <h3 :class="'display-'+displayNumber">{{this.emptyTitle}}</h3>
                <p class="lead">{{this.emptyText}}</p>
            </div>
       </div>
       <slot name="results">
       </slot>
   `
});