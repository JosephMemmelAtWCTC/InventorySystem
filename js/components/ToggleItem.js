app.component('ToggleItem', {
    // Think of this like a constructor for a class/object
    data(){
        return {
            uid: `tgI-${Math.floor(Math.random() * 10e15)}`,
        }
    },
    props: {
        // option:{
        //     type: Object,
        //     required: false,
        // },
        state:{
            type: Boolean,
            required: true,
        }
    },
    methods: {
        toggle(){
            // this.option.state = !this.option.state;
            this.state = !this.state;
        }
        // decrementToQty(){
        //     // item.qty > 0? item.qty-- : "";
        //     if(this.item.qty > 0){
        //         this.item.qty--;
        //     }else{
        //         this.$emit('remove-item', this.item);
        //         // this.shoppingList.splice(this.shoppingList.indexOf(this.item), 1)
        //     }
        // },
    },
    template: `
        <input type="checkbox"
               class="btn-check focus-ring-primary"
               v-model="state"
               autocomplete="off"
               @click="toggle()"
               v-bind:id="uid">
            <label class="btn btn-outline-primary" v-bind:for="uid">
<!--            {{option.title}}-->
                <i class="ps-3 bi fs-4"
                v-bind:class="{'bi-toggle-on': state}, {'bi-toggle-off': !state}">
<!--                v-bind:class="{'bi-toggle-on': this.option.state}, {'bi-toggle-off': !this.option.state}"-->

                <!--                                   :class="'bi-toggle-'+{filterSettings.includeCategories?'on':'off'}">-->
                <!--                                    Trying to merge both -->
            </i>
        </label>
    `
});