app.component('EditModal', {
    data() {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e15),
            appModal: {},
            editItem: {
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
        }
    },
    emits: ['save-it', 'remove-it'],
    methods: {
        openModal(){
            this.editItem= {...this.item};
            this.appModal.openModal();
        },
        saveIt(e){
            this.$refs.myForm.validate().then(success => {
                if (success) {
                    Object.assign(this.item, this.editItem);
                    // if (this.$refs.myForm.validate()) {
                //     Object.assign(this.item, this.editItem);
                    console.log("Sending save-it request");
                    this.$emit('save-it', this.item);
                    this.appModal.hideModal();
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

                <slot :editItem="editItem">
<!--                            <q-input filled v-model="this.editItem.title"-->
<!--                                label="What are you waiting for?"-->
<!--                                class="full-width"-->
<!--                                :rules="[val => val.length > 2 || 'Title requires at least 2 characters']"-->
<!--                                lazy-rules="ondemand"-->
<!--                            />-->
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
