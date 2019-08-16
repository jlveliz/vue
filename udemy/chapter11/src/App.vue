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
    this.$http.get('tareas.json').then( response => {
      return response.json()
    }).then( responseJson => {
        for(let id in responseJson) {
          let tarea = {
            id : id,
            texto: responseJson[id].texto,
            terminado: responseJson[id].terminado
          }
          this.tareas.push(tarea);
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
