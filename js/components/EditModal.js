app.component('EditModal', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
            bsModal: {},
            editItem: {
                title: "00000"
            },
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
    emits: ['card-clicked'],
    methods: {
        openModal(){
            this.bsModal.show();
            console.log("[[[[]]]]");
            this.isOpen = true;
            this.editItem= {...this.item};
        },
        saveIt(e){
            Object.assign(this.item, this.editItem);
        }
    },
    mounted(){
        this.bsModal = new bootstrap.Modal(this.$refs.theModal);
        // Detect close used from https://stackoverflow.com/a/76009900
        this.$refs.theModal.addEventListener('hidden.bs.modal', ()=>{
            this.isOpen = false;//TODO: Make check instead of update every time?
        });
    },
    template: `
<!--                    https://stackoverflow.com/a/47513112/ for @click propagation prevention-->
        <div class="modal fade" @click.stop="" ref="theModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <slot name="header">
                            <h5 class="modal-title">{{ title }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot :editItem="editItem">
<!--                            <q-input filled v-model="this.editItem.title"-->
<!--                                label="What are you waiting for?"-->
<!--                                class="full-width"-->
<!--                                :rules="[val => val.length > 2 || 'Title requires at least 2 characters']"-->
<!--                                lazy-rules="ondemand"-->
<!--                            />-->
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <!-- this is the default slot content -->
                            <button type="button" @click="saveIt" class="btn btn-secondary" data-bs-dismiss="modal">Update Item</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    `,

});
