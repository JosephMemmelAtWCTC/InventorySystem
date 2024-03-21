<!--// app.component('QuasarLayoutBuilt', {-->
<!--//     data() {-->
<!--//         return {-->
<!--//         }-->
<!--//     },-->
<!--//     setup () {-->
<!--//         const leftDrawerOpen = ref(false)-->
<!--//-->
<!--//         return {-->
<!--//             leftDrawerOpen,-->
<!--//             toggleLeftDrawer () {-->
<!--//                 leftDrawerOpen.value = !leftDrawerOpen.value-->
<!--//             }-->
<!--//         }-->
<!--//     },-->
<!--//     props: {-->
<!--//     },-->
<!--//     emits: [],-->
<!--//     methods: {-->
<!--//     },-->
<!--//     template: `-->
<!--//         <q-layout view="hHh LpR fFf">-->
<!--//-->
<!--//             <q-header elevated class="bg-primary text-white">-->
<!--//                 <q-toolbar>-->
<!--//                     <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />-->
<!--//-->
<!--//                     <q-toolbar-title>-->
<!--//                         <q-avatar>-->
<!--//                             <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
<!--//                         </q-avatar>-->
<!--//                         Title-->
<!--//                     </q-toolbar-title>-->
<!--//                 </q-toolbar>-->
<!--//             </q-header>-->
<!--//-->
<!--//             <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" bordered>-->
<!--//                 &lt;!&ndash; drawer content &ndash;&gt;-->
<!--//             </q-drawer>-->
<!--//-->
<!--//             <q-page-container>-->
<!--//                 <router-view />-->
<!--//             </q-page-container>-->
<!--//-->
<!--//             <q-footer reveal bordered class="bg-grey-8 text-white">-->
<!--//                 <q-toolbar>-->
<!--//                     <q-toolbar-title>-->
<!--//                         <q-avatar>-->
<!--//                             <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
<!--//                         </q-avatar>-->
<!--//                         <div>Title</div>-->
<!--//                     </q-toolbar-title>-->
<!--//                 </q-toolbar>-->
<!--//             </q-footer>-->
<!--//-->
<!--//         </q-layout>-->
<!--//     `-->
<!--//-->
<!--// });-->
<template>
    <q-layout view="hHh LpR fFf">

        <q-header elevated className="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu"
                @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"/>
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

        <q-footer reveal bordered className="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"/>
                    </q-avatar>
                    <div>Title</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
    import {ref} from 'vue'

    export default {
    setup() {
    const leftDrawerOpen = ref(false)

    return {
    leftDrawerOpen,
    toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
}
}
}
</script>