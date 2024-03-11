app.component('TogglesArray', {
    // Think of this like a constructor for a class/object
    data(){
        return {
            uid: `tgglArray-${Math.floor(Math.random() * 10e15)}`,

        }
    },
    props: {
        options:{
            type: Array,
            required: true,
        },
        // label:{
        //     type: String,
        //     default: "Toggle Me!"
        // }
    },
    // emits: ['update-option-toggle'],
    watch: {
        // option(toggled) {
        //     this.toggled = toggled;
        // },
        // toggled(toggled) {
        //     this.$emit('update-option-toggle', toggled);
        // }
    },
    template: `
        <div class="btn-group" role="group" aria-label="Checkbox button filter options">

            <toggle-item v-for="(option, i) in options" :key="item.title"
                label="option.label"
                :option="option"
            >
            </toggle-item>
        </div>
<!--<toggle-item label="Include Categories" :option="filterSettings.includeCategories" @update-option-toggle="this.updateToggle('includeCategories')"></toggle-item>-->
<!--<toggle-item label="Include Items" :option="filterSettings.includeItems" @update-option-toggle="this.updateToggle('includeItems')"></toggle-item>-->
<!--<toggle-item label="Only Needs Reorder" :option="filterSettings.underThreshold" @update-option-toggle="this.updateToggle('underThreshold')"></toggle-item>-->
    `,
});