<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li" to="/" active-class="active" extact><a>Inicio</a></router-link> 
                <router-link tag="li" to="/users" active-class="active" extact><a>Usuarios</a></router-link>
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
