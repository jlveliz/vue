<template>
    <div>
        <h3>Información del Usuario</h3>
        <div>
            <p><strong>Nombre:</strong> {{user.first_name}}</p>
            <p><strong>Apellido:</strong> {{user.last_name}}</p>
            <p><strong>Email:</strong> {{user.email}}</p>
        </div>
        <button class="btn btn-primary" @click="volver">Volver</button>
       
    </div>
</template>

<script>
export default {
    name:'UserDetailComponent',
    data(){
        return {
            user: {}
        }
    },
    methods: {
        volver() {
            this.$router.push({name:'Users'});
        }
    },
    created() {
        let id = this.$route.params.id;
        this.$http.get('https://reqres.in/api/users/'+id).then( (result) => {
            return result.json();
        }).then( (result) => {
            this.user = result.data;  
        }).catch((err) => {
            
        });
    }
}
</script>