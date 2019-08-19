<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <li> <router-link to="/">Inicio</router-link> </li>
                <li> <router-link to="/users">Usuarios</router-link></li>  
            </ul>
        </nav>
        <h3 class="text text-muted">Aplicación Usuarios</h3>    
    </div>    
</template>
<script>
export default {
    name: 'Encabezado'
}
</script>
