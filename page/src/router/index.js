import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '../components/form/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    }
  ]
})
