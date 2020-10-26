import Vue from 'vue'
import Router from 'vue-router'
import Home from  '../components/Home.vue'
import Movie from '../components/Movie.vue'
import ErrorView from '../components/ErrorView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie/:id',
      name:'movie',
      component: Movie,
      params: true
    },
    {
      path: '/error',
      name:'error',
      component: ErrorView,
    }
  ]
})