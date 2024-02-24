<template>
  <div class="wishlist-page" v-if="pageData">
    <div class="wishlist-page__content">
      <h1 class="wishlist-page__title"> {{ title }}'s list</h1>
      <WishlistList :list="pageData"></WishlistList>
    </div>
  </div>
</template>

<script>
import WishlistList from '@/components/Wishlist'
export default {
  name: 'WishlistPage',
  props: ['pageData', 'title'],
  components: {
    WishlistList
  },
}


</script>

<style lang="scss">
.wishlist-page {
  width: 100%;
  height: 100%;
}

.wishlist-page__title {
  text-transform: capitalize;
}

.wishlist-page__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
