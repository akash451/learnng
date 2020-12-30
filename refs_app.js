new Vue({
    el: '#vue-app',
    data:{
        output: 'Type Food'
    },
    methods:{
        readRefs: function(){
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});