new Vue({
    el:'#vue-app',
    data: {
         name: 'Akash',
         job: 'Software Engineer',
         website: 'https://www.google.com/',
         age: 25,
         X:0,
         Y:0,
    },
    methods: {
        add: function(inc){
            this.age= this.age+ inc;
        },
        sub: function(dec){
            this.age= this.age-dec;
        },
        greet: function(time){
            return 'Good' +time+' '+ this.name;
        },
        updateXY: function(event){
            this.X= event.offsetX;
            this.Y= event.offsetY;
        }
    }
})