<template>
    <div>
        <h3>Información del Usuario</h3>
        <div>
            <p><strong>Nombre:</strong> {{user.first_name}}</p>
            <p><strong>Apellido:</strong> {{user.last_name}}</p>
            <p><strong>Email:</strong> {{user.email}}</p>
        </div>
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