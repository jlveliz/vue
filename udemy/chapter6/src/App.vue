<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :text="titulo"/>
      <nueva-tarea :tasks="tareas" v-on:updateNumEvents="numTareas+= $event"/>
      <lista-tareas :tasks="tareas"/>
      {{numTareas}}
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
      tareas: [
        {texto:'Aprender Js', terminado: false},
        {texto:'Aprender Agular', terminado: false},
        {texto:'Aprender Css', terminado: false},
      ],
      numTareas: 3,
    }
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
