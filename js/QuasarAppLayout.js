app.component('QuasarAppLayout', {
    data: function () {
        return {
            editableKioskNameLocal: "Loading...",
        };
    },
    props: {
        editableKioskName: {
            type: String,
            required: false,
        },
        currentPageTitle: {
            type: String,
            required: true,
        }
    },
    methods: {

    },
    created:  function () {
        this.editableKioskNameLocal = this.editableKioskName;
    },
    mounted: function () {

    },
    emits: ['update-kiosk-name'],
    watch: {
        editableKioskNameLocal: {
            handler() {
                this.$emit('update-kiosk-name', this.editableKioskNameLocal);
            },
        },
    },
    computed: {

    },
    template: `
        <quasar-layout-built
            main-content-classes="bg-secondary"
            :page-title="currentPageTitle"
        >
        
            <template #left>
                <div>
                    <div>
                        <p class="fs-4 d-flex justify-content-between">{{this.editableKioskName}}<i class="ms-2 bi bi-pencil-square"></i></p>
                        <q-popup-edit v-model="editableKioskNameLocal" auto-save v-slot="scope">
                            <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set"
                                     :rules="[val => val.length > 1 || 'Title requires at least 1 character', [val => val.length < 20 || 'Title cannot at least 1 character']]"/>
                        </q-popup-edit>
                    </div>
                    <hr>
                    <slot name="left">
                    </slot>
                </div>
                <div>
                </div>
            </template>
            
            <template #mainContent>
                This is a teset        
            </template>
            
            <template #footer>
                <slot name="footer">
                </slot>
            </template>
            
        </quasar-layout-built>
    `,

});