app.component('EditModal', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
            bsModal: {},
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
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
        openModal(){
            console.log(':::::');
            this.bsModal.show()
        }
    },
    mounted(){
        this.bsModal = new bootstrap.Modal(this.$refs.theModal);
    },
    watch: {
        item:{
            handler(){
                //console.log(':::::');
                //this.bsModal.show()
                // document.getElementById(this.uid).classList().add('d-none');
            },
            // deep: true,
        },

    },
    template: `
        <p :id="uid" @click="">ITEM TITLE {{this.item}}</p>
        <div class="modal fade" ref="theModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <slot name="header">
                            <h5 class="modal-title">{{ title }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <!-- this is the default slot content -->
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    `,

});
