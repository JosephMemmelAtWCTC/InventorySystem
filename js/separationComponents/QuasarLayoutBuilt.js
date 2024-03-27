app.component('QuasarLayoutBuilt', {
    props: {
        mainContentClasses: {
            type: String,
            required: false,
        },
        pageTitle: {
            type: String,
            required: true,
        }
    },
    template: `
        <q-layout view="lHr LpR lFr">
            <q-header class="bg-primary text-secondary">
              <q-toolbar>
<!--                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />-->
                <q-toolbar-title class="text-center">
                    {{pageTitle}}
                </q-toolbar-title>
              </q-toolbar>
            </q-header>
        
            <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="200" class="d-none d-md-block">
                <div class="m-2">
                    <slot name="left">
                    </slot>
                </div>
            </q-drawer>
        
            <q-page-container :class="mainContentClasses" class="page-container">
<!--              <router-view />-->
                <div>
                    <slot name="content">
                    </slot>
                </div>
            </q-page-container>
        
            <q-footer class="bg-invisible text-primary d-block d-md-none">
                <q-toolbar class="m-0 p-0">
                    <slot name="footer">
                    </slot>
                </q-toolbar>
            </q-footer>
        </q-layout>
    `,
    setup(){
        const leftDrawerOpen = Vue.ref(false);
        return {
            leftDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
        }
    },

});