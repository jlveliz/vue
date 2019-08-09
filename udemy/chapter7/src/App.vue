<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">
          <MostrarFormulario>
            <div slot="titulo">
              <h3>Recuperación de contraseña</h3>  
            </div>

            <div slot="boton">
              <button class="btn btn-primary">Iniciar Sesión</button>
            </div>

            <div slot="elementos">
               <div class="form-group">
                <label for="correo">Correo Electrónico</label>
                <input type="email" class="form-control" id="correo" placeholder="Ingrese su correo Electrónico">
              </div>
              <div class="form-group">
                  <label for="password">Contraseña</label>
                  <input type="password" id="password" class="form-control" placeholder="Ingresa tu contraseña">
              </div>
            </div>
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
