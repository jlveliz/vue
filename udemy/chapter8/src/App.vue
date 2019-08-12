<template>
  <div id="app">
      <div class="container">
        <div class="jumbotron">
          <span v-decorar:grande.negrilla.italico="{familia:'helvetica',color:'red'}">Aprende Vue.js 2 Fácilmente</span>
          <hr>
          <span v-decorar-local="{familia:'serif',color:'green'}">Aprende Angular Fácilmente</span>
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
  directives: {
    'decorar-local' : {
      bind(el, binding, vnode){
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;

        //argumentos o parametros
        if(binding.arg == 'grande') {
          el.style.fontSize = "80px";
        }

        //modificadores
        if(binding.modifiers['negrilla']){
          el.style.fontWeight = 'bold';
        }
      
        if(binding.modifiers['italico']){
          el.style.fontStyle = 'italic';
        }
      }
    }
  }
}
</script>

<style>

</style>
