<template>
    <div class="input-group">
        <input type="text"  class="form-control" placeholder="Ingrese una Nueva Tarea" v-on:keyup.enter="addTask" v-model="newTask">
        <span class="input-group-btn">
            <button class="btn btn-primary" type="button" v-on:clik="addTask">Agregar</button>
        </span>
    </div>
</template>

<script>
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
                this.$emit('updateNumEvents',1);
            }
            this.newTask = '';
        }
    }
}
</script>
