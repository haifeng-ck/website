import Vue from 'vue'
import Router from 'vue-router'
import header from '@/views/header/header'
import main from '@/views/main/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
