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

            <toggle-item v-for="(option, i) in options" :key="i"
                :label="option.label"
                :option="option.state"
                @update-option-toggle="option.state = $event"
                :left-separation-border-class="i===0? '':'leftSeparationBorder'"
            >
            <toggle-item label="Include Categories" :option="filterSettings.toggles[0].state" @update-option-toggle="filterSettings.toggles[0].state = $event"></toggle-item>

            </toggle-item>
        </div>
    `,
});