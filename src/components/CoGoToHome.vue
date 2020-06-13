<template lang='pug'>
  router-link.go-home(
        v-bind:to='{ name: "home" }'
  )
    div.imagen 
      include ../assets/images/back.svg
</template>

<script>
  export default {
    name: 'CoGoToHome'
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';
  .imagen {
    width: 100px;
    height: 100px;
  }
</style>
