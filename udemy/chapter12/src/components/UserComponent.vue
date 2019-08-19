<template>
    <div>
       <p class="text-muted">Lista de usuarios</p>
       <ul class="list-group">
           <router-link tag="li" v-for="user in users" v-bind:key="user" :to="{name:'UserDetail', params:{ id: user.id } }" class="list-group-item"  >{{user.first_name}}</router-link>
       </ul>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'UserComponent',
    data() {
        return {
            id: this.$route.params.id,
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