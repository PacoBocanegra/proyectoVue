<template lang='pug'>
    div.post
        h1.tituloPost {{ titulo }}
        p.infoPost
            span.autor {{ autor }} - 
            span.fechaPublicacion {{ fechaPublicacion }} - 
            span.categoria {{ categoria }}
        p.descripcion {{ descripcion }}
</template>

<script>
    export default {
      name: 'CoPost',
      props: {
        id: {
          type: String,
          required: true
        },
        titulo: {
          type: String,
          required: true
        },
        autor: {
          type: String,
          required: true
        },
        fechaPublicacion: {
          type: String,
          required: true
        },
        categoria: {
          type: String,
          required: true
        },
        descripcion: {
          type: String,
          required: true
        }
      },
      data () {
        return {
          posts: []
        }
      }
    }
</script>

<style lang='css' scoped>
    .post {
        width: 45%;
        height: 200px;
        margin: 5px;
        margin-right: 10px;
        margin-bottom: 25px;
        margin-top: 10px;
        padding: 15px;
        float: left;
        border: 1px solid black;
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