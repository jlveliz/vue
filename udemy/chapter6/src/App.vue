<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :text="titulo"/>
    </div>
  </div>
</template>

<script>
import Titulo from "./TituloComponent";

export default {
  data()  {
    return {
      titulo : '-Lista de Tareas-'
    }
  },
  components: {
    Titulo
  }  
}
</script>

<style>

</style>
