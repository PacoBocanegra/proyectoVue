<template>
  <div class="postit">
    <div class="container">
      <main class="content">

        <header class="content__header">
          <co-logo></co-logo>
        </header>
        <co-search v-on:search='onSearch'></co-search>

        <router-view></router-view>

      </main>

      <footer>
        <co-footer></co-footer>
      </footer>

    </div>
  </div>
</template>

<script>
  import CoLogo from '@/components/CoLogo'
  import CoFooter from '@/components/CoFooter'
  import CoPosts from '@/components/CoPosts'
  import CoSearch from '@/components/CoSearch'

  export default {
    name: 'CoApp',
    components: {
      CoLogo,
      CoFooter,
      CoPosts,
      CoSearch

    },
    methods: {
      onSearch (busqueda) {
        console.log('Search', busqueda)
      }
    }
  }
</script>

<style>
  @font-face {
      font-family: 'Montserrat';
      src: url('./assets/Montserrat-Regular.ttf'),
  }

  * {
    font-family: Montserrat;
  }

  body {
    padding: 10px;
  }
  header {
    width: 100%;
    height: 100px;
    color: white;
    background-color: black;
    display: table;
  }

  nav {
    background-color: white;
    position: relative;
    top: 11px;
    text-align: center;
  }
  footer {
    clear: both;
    width: 100%;
    height: 80px;
    color: white;
    background-color: black;
    display: table;
  }
</style>
