<template lang='pug'>
    div.posts
        div.posts__item(v-for='post in posts')
          router-link(
            v-bind:to="{ name: 'post', params: { id: post.id } }"
          )
            co-post(
              v-bind:id='post.id'
              v-bind:titulo='post.titulo'
              v-bind:autor='post.autor'
              v-bind:fechaPublicacion='post.fechaPublicacion'
              v-bind:categoria='post.categoria'
              v-bind:descripcion='post.descripcion'
            )      
</template>

<script>
    import mocks from '@/mocks/posts.js'

    import bus from '@/busdata.js'

    import CoPost from '@/components/CoPost'

    export default {
      name: 'CoPosts',
      props: {},
      data () {
        return {
          posts: mocks
        }
      },
      components: {
        CoPost
      },
      created () {
        bus.$on('search', busqueda => {
          let cont = 0
          this.posts.forEach((post, index) => {
            if (post.categoria === busqueda) {
              if (cont === 0) {
                this.posts = []
              }
              this.posts.push(post)
              cont++
            }
          })
          if (busqueda === '') {
            this.posts = mocks
          }
        })
      }
    }
</script>

<style lang='css' scoped>
    .post {
        width: 45%;
        margin: 5px;
        margin-right: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
        padding: 15px;
        float: left;
        border: 1px solid black;
        color: black;
    }

    .post:hover {
      opacity: 0.5;
    }

    .tituloPost {
        text-align: center;
    }

    .infoPost {
        color: darkgray;
        text-align: center;
        font-style: italic;
    }
</style>