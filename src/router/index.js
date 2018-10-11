import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Dept from '@/view/Dept'
import Form from '@/view/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dept',
      name: 'Dept',
      component: Dept
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    }
  ]
})
