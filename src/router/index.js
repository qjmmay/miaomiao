import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import Mine from './mine'
import Cinema from './cinema'
Vue.use(VueRouter)

  const routes = [
    MovieRouter,
      Mine,
      Cinema,
    {
      path:'/',
      redirect:'/movie'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
