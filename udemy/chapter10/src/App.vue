<template>
  <div class="container">
    <div class="jumbotron">
      {{mensaje }}
      <hr/>  
      {{mensaje | mayusculas}}
      <hr/>  
      {{mensaje | suspensivos | mayusculas}}

      <hr/>
      <h3>Temparatura</h3>
      {{temparatura}}
      <hr/>
      {{temparatura | aFahrenheit}}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mensaje: 'Aprende JS 2 Fácilmente',
      temparatura: 30
    }
  },
  filters: {
    mayusculas(str) {
      return str.toUpperCase();
    },
    aFahrenheit(temp) {
      return (9/5 * temp) + 32 + ' F';
    }
  }
}
</script>

<style>

</style>
