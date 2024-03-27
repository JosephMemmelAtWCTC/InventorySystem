app.component('AppModal', {
    data(){
        return {
            bsModal: {}
        }
    },

    props: {
        title: {
            type: String,
            default: 'Modal Title',
        },
        btnClass: {
            type: String,
        },
        btnIconClass: {
            type: String,
        },
    },
    methods: {
        openModal(){
            this.bsModal.show();
        },
        hideModal(){
            this.bsModal.hide();
        },
    },

    mounted(){
        this.bsModal = new bootstrap.Modal(this.$refs.theModal);
    },

    template: `
       <button :class="'btn ' + btnClass" @click="bsModal.show()">
            <i v-if="btnIconClass" :class="btnIconClass"></i>
            {{ btnText }}
       </button>
       <teleport to="body">
       <div class="modal fade" @click.stop="" ref="theModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content bg-body-tertiary">
                    <div class="modal-header">
                        <slot name="header">
                            <h5 class="modal-title text-body">{{ title }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </slot>
                    </div>
                    <div class="modal-body text-body">
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
        </teleport>
   `
});