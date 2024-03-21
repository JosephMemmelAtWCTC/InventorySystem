app.component('QuasarApp', {
    data: function () {
    },
    editableKioskName: {
        option: {
            type: Boolean,
            required: false,
        },
    },
    template: `
        <quasar-layout-built>
            <template #left>
                <div>
                    <p class="fs-4 d-flex justify-content-between">{{editableKioskName}}<i class="ms-2 bi bi-pencil-square"></i></p>
                    <q-popup-edit v-model="editableKioskName" auto-save v-slot="scope">
                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set"
                                 :rules="[val => val.length > 1 || 'Title requires at least 1 character', [val => val.length < 20 || 'Title cannot at least 1 character']]"/>
                    </q-popup-edit>
                </div>
                <hr>
                <div>
                    <navigate-icon-item tooltip-info="Home" @click="openNavPage('home')" li-extra-classes="p-2 mb-2" icon-class="bi-house">
                    </navigate-icon-item>
                    <navigate-icon-item tooltip-info="Inventory" @click="openNavPage('inventory')" li-extra-classes="p-2 mb-2" icon-class="material-symbols-outlined" icon-content="package_2"><!--fa-solid fa-boxes-stacked-->
                    </navigate-icon-item>
<!--                    <navigate-icon-item tooltip-info="Recents" @click="openNavPage('recents')" li-extra-classes="p-2 mb-2" icon-class="bi-arrow-left-right" :badge-text="recentItemsList.length+''">-->
<!--                    </navigate-icon-item>-->
                    <navigate-icon-item tooltip-info="Account" @click="openNavPage('account')" li-extra-classes="p-2 mb-2" icon-class="bi-person">
                    </navigate-icon-item>
                </div>
            </template>
        </quasar-layout-built>
    `,

});