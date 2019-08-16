<template>
    <div class="input-group">
        <input type="text"  class="form-control" placeholder="Ingrese una Nueva Tarea" v-on:keyup.enter="addTask" v-model="newTask">
        <span class="input-group-btn">
            <button class="btn btn-primary" type="button" v-on:click="addTask">Agregar</button>
        </span>
    </div>
</template>

<script>

import { bus } from "./main";

export default {
    name: 'NuevaTarea',
    data() {
        return {
            newTask : ''
        }
    },
    props: [
        'tasks'
    ],
    methods: {
        addTask() {
            let task = {texto:this.newTask,terminado:false};
            if(this.tasks) {

                this.tasks.push(task);
                
                
                
                //una forma de enviar eventos 
                // this.$emit('updateNumEvents',1);

                //forma de pasar datos entre componentes {eventos}
                bus.$emit('actualizarContador',this.tasks.length);
            }
            this.newTask = '';
            //envia a firebase
            this.$http.post('https://tarejas-a2bb0.firebaseio.com/tareas.json',task).then( response => {
                console.log(response);
            });
        }
    },
    created() {
        bus.$emit('actualizarContador',this.tasks.length);
    }
}
</script>
