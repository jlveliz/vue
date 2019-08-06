<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(tarea, idxTarea) in tasks" v-bind:class="{terminada: tarea.terminado}">
            {{ idxTarea + 1 }} - {{tarea.texto}}
            <span class="pull-right">
                <button type="button" class="btn btn-xs btn-success glyphicon glyphicon-ok" v-on:click="tarea.terminado = !tarea.terminado"></button>
                <button type="button" class="btn btn-xs btn-danger glyphicon glyphicon-remove" v-on:click="removeTask(idxTarea)"></button>
            </span>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'ListaTareas',
    props: ['tasks'],
    methods: {
        removeTask(index){
            this.tasks.splice(index,1);
        }
    }
}
</script>

<style scoped>
    .terminada {
        color: gray;
        text-decoration: line-through
    }
</style>

