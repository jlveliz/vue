<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :text="titulo"/>
      <nueva-tarea :tasks="tareas" v-on:updateNumEvents="numTareas+= $event"/>
      <lista-tareas :tasks="tareas"/>
    </div>
  </div>
</template>

<script>
import Titulo from "./TituloComponent";
import NuevaTarea from "./NuevaTareaComponent";
import ListaTareas from "./ListaTareas";

export default {
  data()  {
    return {
      titulo : '-Lista de Tareas-',
      tareas: [],
    }
  },
  created() {
    this.$http.get('https://tarejas-a2bb0.firebaseio.com/tareas.json').then( response => {
      return response.json()
    }).then( responseJson => {
        for(let id in responseJson) {
          this.tareas.push(responseJson[id]);
        }
    })
  },
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  }  
}
</script>

<style>

</style>
