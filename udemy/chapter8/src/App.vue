<template>
  <div id="app">
      <div class="container">
        <div class="jumbotron">
          <span v-decorar:grande.negrilla.italico="family">Aprende Vue.js 2 Fácilmente</span>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      family: 'helvetica'
    }
  },
  components: {
    
  }
}
</script>

<style>

</style>
