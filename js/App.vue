<script>
import {defineComponent} from "vue";
// @ = src
import LibraryItemList from "./components/LibraryItemList.vue";

export default defineComponent({
  components: {LibraryItemList}
})
</script>

<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
  </nav>

  <div class="container-fluid mt-3">
    <library-item-list></library-item-list>
  </div>
</template>

<style scoped>
</style>
