app.component('EditModal', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
            bsModal: {},
            editItem: {
                title: "Edit Modal"
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
        canRemove: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: ['card-clicked', 'remove-it'],
    methods: {
        openModal(){
            this.editItem= {...this.item};
            this.bsModal.show();
            this.isOpen = true;
        },
        saveIt(e){
            Object.assign(this.item, this.editItem);
            this.$refs.myForm.validate().then(success => {
                if (success) {
                    this.bsModal.hide();
                } else {
                    this.$q.notify({
                        message: 'All fields must be filled in properly',
                        color: 'warning',
                        progress: true,
                        actions: [
                            {
                                icon: 'bi-x-lg',
                                color: 'primary',
                                round: true,
                                handler: () => {
                                }
                            }
                        ]
                    });
                }
            })

        },
        removeIt(e){
            console.log('removing item ', this.item)
            this.$emit('remove-it', this.item);
        }
    },
    mounted(){
        this.bsModal = new bootstrap.Modal(this.$refs.theModal);
        // Detect close used from https://stackoverflow.com/a/76009900
        this.$refs.theModal.addEventListener('hidden.bs.modal', ()=>{
            this.isOpen = false;//TODO: Make check instead of update every time?
        });
        // this.form = new bootstrap.Form(this.$refs.theForm);
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
                        <q-form
                            @submit="onSubmit"
                            @reset="onReset"
                            ref="myForm"
                        >
                            <slot :editItem="editItem">
    <!--                            <q-input filled v-model="this.editItem.title"-->
    <!--                                label="What are you waiting for?"-->
    <!--                                class="full-width"-->
    <!--                                :rules="[val => val.length > 2 || 'Title requires at least 2 characters']"-->
    <!--                                lazy-rules="ondemand"-->
    <!--                            />-->
                            </slot>
                        </q-form>
                    </div>
                    <div class="modal-footer w-100">
                        <slot name="footer" class="w-100">
                            <div class="w-100">
                                <button v-if="canRemove" type="button" @click="removeIt" class="float-start btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-trash3"></i></button>
                                <button type="button" @click="saveIt" class="float-end btn btn-secondary" >{{submitButtonText}}</button>
<!--                                data-bs-dismiss="modal"-->
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    `,

});
