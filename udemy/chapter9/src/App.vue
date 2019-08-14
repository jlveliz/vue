<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Formulario</h1>
          <form action="">
            <div class="form-group">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" name="nombre" id="nombre" class="form-control" v-model.trim="usuario.nombre">
            </div>
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" name="email" id="email" class="form-control" v-model.lazy="usuario.correo">
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" name="password" id="password" class="form-control" v-model="usuario.password">
            </div>
            <div class="form-group">
              <label for="edad">Edad</label>
              <input type="number" name="edad" id="edad" class="form-control" min="1" v-model.number="usuario.edad">
            </div>
            <div class="form-group">
              <label for="pais">País</label>
              <!-- <input type="int" name="edad" id="edad" class="form-control"> -->
              <select name="pais" id="pais" class="form-control" v-model="usuario.pais">
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Brasil">Brasil</option>
              </select>
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje</label>
              <textarea class="form-control" name="mensaje" id="mensaje" cols="30" rows="5"></textarea>
            </div>
            <h3>Género</h3>
            <div class="radio">
              <label>
                <input type="radio" name="genero" id="genero" checked>
                Hombre
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="genero" id="genero">
                Mujer
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" value="">
                Acepto terminos y condiciones
              </label>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>

        </div>
        <div class="col-md-6">
          <h1>Resultados</h1>
          <p> <b>Nombre:</b> {{usuario.nombre}}</p>
          <p> <b>Correo Electrónico:</b> {{usuario.correo}} </p>
          <p> <b>Contraseña:</b> {{usuario.password}} </p>
          <p> <b>Edad:</b> {{usuario.edad}} </p>
          <p> <b>País:</b> {{usuario.pais}} </p>
          <p> <b>Mensaje:</b> </p>
          <p> <b>Género:</b> </p>
          <p> <b>condiciones:</b> </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      usuario: {
        nombre: "",
        correo: "",
        password: "",
        edad: "",
        pais: null
      }
      
    }
  }
}
</script>

<style>

</style>
