<template>
    <h3 class="footer">{{ msg }}</h3>
</template>

<script>
export default {
  name: 'CoFooter',
  data () {
    return {
      msg: 'Diseñado por: Francisco Bocanegra'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .footer {
    text-align: center;
    display:table-cell;
    vertical-align: middle;
  }
</style>
