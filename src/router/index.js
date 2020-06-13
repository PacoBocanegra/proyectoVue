import Vue from 'vue'
import Router from 'vue-router'

import CoPosts from '@/components/CoPosts'
import CoInfo from '@/components/CoInfo'
import CoNotFound from '@/components/CoNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoPosts
    },
    {
      path: '/post/:id',
      name: 'post',
      component: CoInfo,
      props: true
    },
    {
      path: '/not-found',
      name: '404',
      component: CoNotFound
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }

  ]
})
