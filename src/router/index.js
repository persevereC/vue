import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Hello from 'components/nav1/Hello'
import List from 'components/nav1/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: '/hello', component: Hello, name: 'Hello' },
        { path: '/list', component: List, name: 'List' }
      ]
    }
  ]
})
