<template>
    <div>
        <h1>{{text}}</h1> 
        <h3>Numero de tareas por hacer:  {{numtareas}}</h3>  
    </div>
</template>

<script>
//importamos un servicio o bus de eventos
import { bus } from "./main";

export default {
    name:'Titulo',
    props: [
        'text'
    ],
    created() {
        bus.$on('actualizarContador',(numTareas) => {
            this.numtareas = numTareas;
        })
    },
    data() {
        return {
            numtareas : 0
        }
    }
    
}
</script>

<style>

</style>


