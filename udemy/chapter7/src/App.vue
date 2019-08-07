<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">
          <MostrarFormulario>
            <h3>Recuperar Contraseña</h3>
          </MostrarFormulario>
      </div>
    </div>
  </div>
</template>

<script>

import MostrarFormulario from './components/MostrarFormulario'

export default {
  name: 'App',
  components: {
    MostrarFormulario
  }
}
</script>

<style>

</style>
