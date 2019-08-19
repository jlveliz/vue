<template>
  <div class="container">
    <Encabezado/>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Encabezado from './components/Encabezado';

export default {
  name: 'App',
  components: {
    Encabezado
  }
}
</script>

<style>

</style>
