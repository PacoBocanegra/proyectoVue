<template lang='pug'>
  input.search(
    name='search'
    type='text'
    placeholder='Filtra por categoria'
    class='search'
    v-model='busqueda'
    v-on:keyup.enter='onSearch'
  )
</template>

<script>
  import bus from '@/busdata.js'

  export default {
    name: 'CoSearch',
    data () {
      return {
        busqueda: ''
      }
    },
    methods: {
      onSearch () {
        bus.$emit('search', this.busqueda)
      }
    }
  }
</script>

<style lang='css'>
  .search {
    margin: 1rem;
  }
</style>
