new Vue({
    el:'#vue-app',
    data: {
         name: 'Akash',
         job: 'Software Engineer'
    },
    methods: {
        greet: function(time){
            return 'Good' +time+' '+ this.name;
        }
    }
})