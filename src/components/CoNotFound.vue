<template lang='pug'>
  .not-found
    h1.errorMensaje Ops! La ruta que busca no existe!
    div.enlace
        router-link.errorLink(
        v-bind:to='{ name: "home" }'
        ) Volver a la página principal
</template>

<script>
  export default {
    name: 'CoNotFound'
  }
</script>

<style lang='css' scoped>
  .errorMensaje {
      text-align: center;
  }

  .enlace {
      text-align: center;
      margin-bottom: 20px;
  }

</style>
