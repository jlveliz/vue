var app = new Vue({
    el: "#app",
    data: {
        message: 'Hola A todos esta es mi primera app con VUE',
        img: 'vue.png'
    },
    methods: {
        mostrarMensaje : function() { 
            return this.message;
        }   
    },
    beforeCreate: () => {
        console.log("Llamando beforeCreate");
    },
    created: () => {
        console.log("Llamando beforeCreated");
    },
    beforeMount: () => {
        console.log("Llamando beforeMount");
    },
    mounted: () => {
        console.log("Llamando Mounted");
    },
    beforeUpdate: () => {
        console.log("Llamando Update");
    },
    updated: () => {
        console.log("Llamando Updated");
    },
    beforeDestroy: () => {
        console.log("llamando beforeDestroy")
    },
    destroyed: () => {
        console.log("llamando Destroyed")
    },
    methods : {
        destroyMessage: function() {
            this.$destroy();
        }
    }
})