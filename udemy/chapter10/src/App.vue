<template>
  <div class="container">
    <div class="jumbotron">
      {{mensaje | mayusculas}}
      <hr/>  
      {{mensaje }}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mensaje: 'Aprende JS 2 Fácilmente'
    }
  },
  filters: {
    mayusculas(str) {
      return str.toUpperCase();
    }
  }
}
</script>

<style>

</style>
