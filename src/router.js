import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Mail from './views/Mail.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',  
      component: Home, 
      redirect: () => {
       return {
          path:"/home/list"
       }
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: "list",
          component: List
        },
        {
          path: "mail",
          component: Mail
        },
        {
          path: "about",
          component: About
        }
      ]
    },
    {
      path:"/msg",
      name:'msg',
      component: ()=>import('./views/Msg.vue')
    }
  ]
})
