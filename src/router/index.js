import { createRouter, createWebHashHistory } from 'vue-router'
import WishlistPage from '../views/WishlistPage.vue'
import { wishlistPages } from '@/pages/WishListPages'


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
    name: 'wishlist',
    component: WishlistPage,
    // props: { data: }
  },

  ...wishlistRoutes()
]

console.log('routes', wishlistRoutes())

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
