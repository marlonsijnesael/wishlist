import { createRouter, createWebHashHistory } from 'vue-router'
import WishlistPage from '../views/WishlistPage.vue'
import WishlistDetailPage from '@/views/WishlistDetailPage'
import HomePage from '@/views/HomePage'

const wishlistEndpoints = [
  "wouter",
  "kelsey"
]

const wishlistRoutes = () =>{
  const routes = []
  for (const page of wishlistEndpoints){
    const route = {
      path: `/${page}`,
      name: `wishlist-${page}`,
      component: WishlistPage,
      props: { page:page}
    }
    routes.push(route)
  }
  return routes
}

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/:person/items/:path',
    component: WishlistDetailPage,
    props: true 
  },
  ...wishlistRoutes()
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
