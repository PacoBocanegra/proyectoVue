<template>
    <h1 class="logo">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'CoLogo',
  data () {
    return {
      msg: 'Postit'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .logo {
    text-align: center;
    display:table-cell;
    vertical-align: middle;
  }
</style>
