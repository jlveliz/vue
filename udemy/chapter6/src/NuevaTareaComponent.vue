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
            if(this.tasks) {
                this.tasks.push({texto:this.newTask,terminado:false});
                //una forma de enviar eventos 
                // this.$emit('updateNumEvents',1);

                //forma de pasar datos entre componentes {eventos}
                bus.$emit('actualizarContador',this.tasks.length);
            }
            this.newTask = '';
        }
    },
    created() {
        bus.$emit('actualizarContador',this.tasks.length);
    }
}
</script>
