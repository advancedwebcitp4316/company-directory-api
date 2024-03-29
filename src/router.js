import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from './composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'
import CardDetails from './views/CardDetails.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

const routes = [
  { path: '/company-directory-api/', name: 'Home', component: HomePage },
  { path: '/company-directory-api/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/company-directory-api/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/company-directory-api/login', name: 'LoginPage', component: LoginPage },
  { path: '/company-directory-api/settings', name: 'SettingsPage', component: SettingsPage, meta: {requiresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


//registering a navigation guard that will be executed before each route navigation.

router.beforeEach((to, _, next) => {
  // Check if the destination route requires authentication
  // and if the user is not authenticated
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // Redirect to the 'Login' route with a query parameter
    // indicating the original route's full path
    next({ name: 'LoginPage', query: { redirect: to.fullPath } })
  } else {
    // Continue with the navigation if no authentication is required
    // or if the user is authenticated
    next()
  }
})

export default router
