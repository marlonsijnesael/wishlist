import { createRouter, createWebHashHistory } from 'vue-router'
import WishlistPage from '../views/WishlistPage.vue'
import { wishlistPages } from '@/pages/WishListPages'
import WishlistDetailPage from '@/views/WishlistDetailPage'
import HomePage from '@/views/HomePage'

const wishlistRoutes = () =>{
  const routes = []
  for (const page of wishlistPages){
    const route = {
      path: `/${page.path}`,
      name: `wishlist-${page.path}`,
      component: WishlistPage,
      props: { pageData: page.data, title: page.path}
    }
    routes.push(route)
  }
  return routes
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/items/:path',
    component: WishlistDetailPage,
    props: true 
  },
  ...wishlistRoutes()
]

console.log('routes', wishlistRoutes())

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
