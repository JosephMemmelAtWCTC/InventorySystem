app.component('EditModal', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
            appModal: {},
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        title: {
            type: String,
            default: "Edit",
        },
        submitButtonText: {
            type: String,
            required: true,
        },
        canRemove: {
            type: Boolean,
            required: false,
            default: false,
        },
        itemConstructorType: {
            type: String,
            required: false,
        }
    },
    emits: ['opened-modal', 'save-it', 'remove-it'],
    methods: {
        openModal(){
            this.$emit('opened-modal');
            this.appModal.openModal();
        },
        // NEED TO MAKE PUSHED VALUE OF ACTUALL TYPE, make product insid
        saveIt(e){
            // console.log("SaveIt Start itm", this.item);
            this.$refs.myForm.validate().then(success => {
                if (success) {
                    this.appModal.hideModal();
                    console.log("EventModal.js save-it");
                    // NOTE TO SELF: Does not use this.item via $emit when using cards, is used when collected in creating new inventory items
                    this.$emit('save-it', [undefined, this.item]);
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
            });

        },

        removeIt(e){
            console.log('removing item ', this.item)
            this.$emit('remove-it', this.item);
        }
    },
    mounted(){
        console.log("MOUNTEDA - ",this.item);
        this.appModal = this.$refs.theModal;
    },
    template: `
        <app-modal ref="theModal"
                   :title="title"
        >
            <q-form
                ref="myForm"
            >
<!--                @submit="onSubmit"-->
<!--                @reset="onReset"-->
                <slot :edit-item="item">
                </slot>
            </q-form>
            <template #footer>
                <div class="w-100">
                    <button v-if="canRemove" type="button" @click="removeIt" class="float-start btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-trash3"></i></button>
                    <button type="button" @click="saveIt" class="float-end btn btn-secondary" >{{submitButtonText}}</button>
                </div>
            </template>
        </app-modal>
    `,

});
