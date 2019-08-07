<template>
    <form action="" class="form">
        <slot></slot>
        <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" class="form-control" id="correo" placeholder="Ingrese su correo Electrónico">
        </div>
        <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" class="form-control" placeholder="Ingresa tu contraseña">
        </div>
        <button class="btn btn-primary">Iniciar Sesión</button>
    </form>
</template>

<script>
export default {
    
}
</script>


