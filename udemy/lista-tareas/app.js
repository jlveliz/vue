new Vue({
    el:'#app',
    data: {
        title : "Lista de tareas",
        tareas: [
            {texto: 'Aprender Vue.js', terminado: false},
            {texto: 'Aprender Angular', terminado: false},
            {texto: 'Aprender C#', terminado: false},
            {texto: 'Aprender PHP', terminado: false},
            {texto: 'Aprender Javascript', terminado: false},
        ],
        nuevaTarea: ''
    },
    methods: {
        addTask: function() {
            let text = this.nuevaTarea.trim();
            if(text) {
                this.tareas.push({texto:this.nuevaTarea,terminado:false});
                this.nuevaTarea ='';
            }
        },
        doTask: function() {
            
        }
    }
})