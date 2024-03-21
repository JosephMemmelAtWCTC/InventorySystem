app.component('QuasarLayoutBuilt', {

    template: `
        <q-layout view="lHr LpR lFr">
        
            <q-header class="bg-primary text-secondary">
              <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        
                <q-toolbar-title>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                  </q-avatar>
                  Title
                </q-toolbar-title>
              </q-toolbar>
            </q-header>
        
            <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="200">
                <div class="m-2">
                    <slot name="left">
                                    
                    </slot>
                </div>
            </q-drawer>
        
            <q-page-container>
              <router-view />
            </q-page-container>
        
            <q-footer elevated class="bg-grey-8 text-secondary">
              <q-toolbar>
                <q-toolbar-title>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                  </q-avatar>
                  <div>Title</div>
                </q-toolbar-title>
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
    // <script>
    //     import {ref} from 'vue'
    //
    //     export default {
    //     setup() {
    //     const leftDrawerOpen = ref(false)
    //
    //     return {
    //     leftDrawerOpen,
    //     toggleLeftDrawer () {
    //     leftDrawerOpen.value = !leftDrawerOpen.value
    // }
    // }
    // }
    // }
    // </script>

});