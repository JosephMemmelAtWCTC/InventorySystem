app.component('ToggleItem', {
    // Think of this like a constructor for a class/object
    data(){
        return {
            uid: `tgglItm-${Math.floor(Math.random() * 10e15)}`,
            toggled: this.option,
        }
    },
    props: {
        option:{
            type: Boolean,
            required: false,
        },
        label:{
            type: String,
            default: "Toggle Me!"
        }
    },
    emits: ['update-option-toggle'],
    watch: {
        option(toggled) {
            this.toggled = toggled;
        },
        toggled(toggled) {
            this.$emit('update-option-toggle', toggled);
        }
    },
    template: `
<!--@click="toggled = !toggled"-->
        <input type="checkbox" v-model="toggled" class="btn-check focus-ring-primary border-end border-black" :id="uid"
           autocomplete="off">
        <label class="btn btn-outline-primary" :for="uid"
            :class="{'link-secondary': toggled}"
        >{{ label }}
        
            <i class="ps-3 bi fs-4"
               v-bind:class="{'bi-toggle-on': toggled}, {'bi-toggle-off': !toggled}">
                <!--                                   :class="'bi-toggle-'+{filterSettings.includeCategories?'on':'off'}">-->
                <!--                                    Trying to merge both -->
            </i>
        </label>
    `,
});