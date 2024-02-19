const app = Vue.createApp({
    // data: all the data for the app, must return an object
    data: function() {
        return {
            currentPage: -1,
            // newItem: {
            //     name: '',
            //     qty: 1,
            //     category: 'need',
            //     purchased: false,
            // },
            // shoppingList: [
            //     {name: 'Hammer', qty: 1, purchased: true, category: 'need'},
            //     {name: 'Nails', qty: 10, purchased: false, category: 'need'},
            //     {name: 'Sliding Compound Miter Saw', qty: 1, purchased: false, category: 'want'},
            // ],
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        openNavPage(pageLabel){
            console.log(`opening page ${pageLabel}`);
            $(`*[data-navPage]`).addClass('d-none');
            $(`*[data-navPage="${pageLabel}"]`).removeClass('d-none');

        },
        // decrementToQty: function(item){
        //     // item.qty > 0? item.qty-- : "";
        //     if(item.qty > 0){
        //         item.qty--;
        //     }else{
        //         this.shoppingList.splice(this.shoppingList.indexOf(item), 1)
        //     }
        // },
        // addIt(e){
        //     this.shoppingList.push(this.newItem);
        //
        //     // Clear the form
        //     this.newItem = {
        //         name: '',
        //             qty: 1,
        //             category: 'need',
        //             purchased: false,
        //     };
        // }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        // needList(){
        //     return this.shoppingList.filter(function(item){
        //         return !item.purchased && item.category === 'need';
        //     });
        // },
        // gotList(){
        //     return this.shoppingList.filter(function(item){
        //         return item.purchased;
        //     });
        // },
        // wantList(){
        //     return this.shoppingList.filter(function(item){
        //         return !item.purchased && item.category === 'want';
        //     });
        // },
    },

    //mounted:  called after the instance has been mounted,
    // mounted: function () {
    created: function(){
        // if(localStorage.getItem('shoppingList')){
        //     this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        // }
        if(localStorage.getItem('openPage')){
            $(`*[data-navPageTarget="${localStorage.getItem('openPage')}"]`).first().trigger('click');

        }

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        // shoppingList:{
        //     // Call this every time a value changes in shoppingList
        //     handler(){//newList){
        //         localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
        //     },
        //     // Watch all nested properties as well
        //     deep: true,
        // },
        currentPage:{
            handler(){//newList){
                localStorage.setItem('openPage', this.openPage);
            },
        }
    }
});
