<template>
    <div>
       <p class="text-muted">Lista de usuarios</p>
       <ul class="list-group">
           <li class="list-group-item" v-for="user in users"> {{user.first_name}}</li>
       </ul>
    </div>
</template>

<script>
export default {
    name: 'UserComponent',
    data() {
        return {
            users: {}
        }
    },
    created() {
        this.$http.get("https://reqres.in/api/users").then( (result) => {
            return result.json()
        }).then( (users) => {
            this.users = users.data;
        })
        .catch((err) => {
            
        });;
    }
}
</script>