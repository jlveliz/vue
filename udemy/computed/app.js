var app = new Vue({
    el: "#app",
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto:  0,
        suma:    0,
    },
    computed:{
        total: function() {
            this.suma =  this.primero + this.segundo + this.tercero + this.cuarto;
            return this.suma;
        }
    },
    methods: {
        reset: function() {
            this.primero = 0;
            this.segundo = 0;
            this.tercero = 0;
            this.cuarto = 0;
            this.suma = 0;
        }
    }
})