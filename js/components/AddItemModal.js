app.component('AddItemModal', {
    data(){
        return {
            newItem: {
                id: undefined,
                title: '',
                description: '',
                image: 'https://picsum.photos/200/300',
                qty: 1,
                productId: null,
                reorderLevel: null,
            },
        }
    },
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    emits: ['add-item'],
    methods:{
        addItem(e){
            // Add to list
            this.$emit('add-item', this.newItem);

            // Clear the form
            this.newItem = {
                id: undefined,
                title: '',
                description: '',
                image: 'https://picsum.photos/200/300',
                qty: 1,
                productId: null,
                reorderLevel: null,
            };
        },
    },
    template: `                        
        <div :id="id" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="newItemModelLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="newItemModelLabel">New Item</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="addItem" ref="form" class="needs-validation" novalidate>
                        <img id="cameraModelTakePhoto" width="25%" src="./staticImages/camera.svg" class="d-lg-none border-secondary p-2 border-2 mx-auto d-block" alt="Camera Take Photo">
                        <img id="cameraModelTakeFile" width="15%" src="./staticImages/folder.svg" class="d-none d-lg-block border-secondary p-2 border-2 mx-auto d-block" alt="Camera Take Photo">
                        <div class="mb-3">
                            <label for="new-item-name" class="col-form-label">Name:</label>
                            <input type="text" class="form-control focus-ring-primary" id="new-item-name" required v-model="newItem.title">
                            <div class="invalid-feedback">
                                A name is required for the item
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="new-item-id" class="col-form-label">Product ID:</label>
                            <input type="text" class="form-control focus-ring-primary" id="new-item-id" required v-model="newItem.productId">
                            <div class="invalid-feedback">
                                A product id is required for the item
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="new-item-description" class="col-form-label">Description:</label>
                            <textarea class="form-control focus-ring-primary" id="new-item-description" required  v-model="newItem.description"></textarea>
                            <div class="invalid-feedback">
                                A description is required for the item
                            </div>
                        </div>
                        <label for="new-item-reorderLevel" class="col-form-label">Reorder Level:</label>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control focus-ring-primary" id="new-item-reorderLevel" value="" placeholder="Leave blank to ignore reorder" min="0"  v-model="newItem.reorderLevel">
                            <span class="input-group-text">
                                <button type="button" @click="newItem.reorderLevel=undefined" class="col-auto btn btn-secondary justify-content-center">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </span>
                        </div>

                        <label for="new-item-qty" class="col-form-label"># In Stock:</label>
                        <div class="input-group mb-3 w-100 w-md-100 mx-auto container">
                            <div class="row w-100 g-0 justify-content-center">
                                <div class="col-2">
                                    <button type="button" @click="newItem.qty -= (newItem.qty > 0? 1:0)" class="d-md-none d-block rounded-0 rounded-start-3 form-control focus-ring-primary" id="new-item-qty-minus">
                                        <i class="bi bi-dash"></i>
                                    </button>
                                </div>
                                <div class="col-md-12 col-8">
                                    <input type="number" class="rounded-md-0 form-control focus-ring-primary" id="new-item-qty" value="" placeholder="" min="0" v-model="newItem.qty">
                                </div>
                                <div class="col-2 d-md-none d-block">
                                    <button type="button" @click="newItem.qty++" class="rounded-0 rounded-end-3 form-control focus-ring-primary" id="new-item-qty-plus" >
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer row justify-content-center">
                            <button type="submit" class="col-auto btn btn-primary justify-content-center" data-bs-dismiss="modal">Create Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
});