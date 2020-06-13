<template lang='pug'>
    div.post
        div.home
            co-go-to-home
        h1.tituloPost {{ info.titulo }}
        p.infoPost
            span.autor {{ info.autor }} - 
            span.fechaPublicacion {{ info.fechaPublicacion }} - 
            span.categoria {{ info.categoria }}
        p.descripcion {{ info.descripcion }}
</template>

<script>
    import mocks from '@/mocks/posts.js'
    import CoGoToHome from '@/components/CoGoToHome'

    export default {
      name: 'CoInfo',
      props: {
        id: {
          type: String,
          required: true
        }
      },
      data () {
        return {
          info: {
            titulo: '',
            autor: '',
            fechaPublicacion: '',
            categoria: '',
            descripcion: ''
          },
          posts: mocks
        }
      },
      components: {
        CoGoToHome
      },
      mounted () {
        this.getPostData()
      },
      methods: {
        getPostData () {
          this.posts.forEach((post, index) => {
            if (post.id === this.id) {
              this.info = post
            }
          })
        }
      }
    }
</script>

<style>
  .post {
        margin: 5px;
        margin-right: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
        padding: 15px;
        border: 1px solid black;
    }

    .tituloPost, .descripcion {
        text-align: center;
    }

    .infoPost {
        color: darkgray;
        text-align: center;
        font-style: italic;
    }
</style>