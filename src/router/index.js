import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
//import AddItem from 'components/AddItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
