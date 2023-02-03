import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: () => import('../views/TareasView.vue')
    },
    {
      path: '/tarea/:id',
      name: 'tarea',
      component: () => import('../views/TareaView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      //component: HomeView
      component: () => import('../views/TareasView.vue')
    }
  ]
})

export default router
