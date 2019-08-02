<template>
    <!-- <div v-html="myHtml">
        <h2>{{ title }} {{user.name +' ' + user.last_name}} </h2>
    </div> -->
    <div>
        <div v-if="!showName">
            <p>No puedo mostrar el contenido</p>
        </div>
        <div v-else>
            {{user.name}} {{user.last_name}}
        </div>
        <hr>
        <div> 
            <h3>Todo list</h3> 
            <!-- <ol>
                <li v-for="(task, idx) in tasks">{{task.title}}</li>
            </ol> -->
            <input type="text" v-model="user.name" v-on:keyup.enter="writeAble">
            <button v-on:click="pressMe()" type="button">Press me!</button>
        </div>
    </div>

   
</template>

<script>
export default {
   name: 'Test',
   data ()  {
       return {
           title: 'Hola User ',
           user: {
               name : 'Karen',
               last_name: 'de Veliz'
           },
           myHtml : '<h1>esto es un Html</h1>',
           showName: true,
           tasks: [
               {title: 'Go Cinemark'},
               {title: 'new date'}
           ]
       }
   },
   methods: {
       pressMe(e) {
           alert("Hola " + this.user.name)
       },
       writeAble() {
           console.log(this.user.name)
       }
       
   }
}
</script>

<style>

</style>


