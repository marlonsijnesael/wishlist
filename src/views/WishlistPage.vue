<template>
  <div class="wishlist-page" v-if="pageData">
    <div class="wishlist-page__content">
      <h1 class="wishlist-page__title"> {{ page }}'s list</h1>
      <WishlistList  v-if="this.show" :list="pageData" :person="page"></WishlistList>
      <div v-else class="wishlist-page__spinner">
        <LoaderSpinner/>
      </div>
    </div>
  </div>
</template>

<script>
import WishlistList from '@/components/Wishlist'
import LoaderSpinner from '@/components/LoaderSpinner.vue'

export default {
  name: 'WishlistPage',
  props: ['page'],
  components: {
    WishlistList,
    LoaderSpinner
  },
  data() {
    return {
      pageData: null,
      show: false
    }
  },
  async mounted() {
    this.pageData = await this.fetchPageData(this.page)
    this.show = true
  },
  watch: {
    async $route() {
      this.pageData = await this.fetchPageData(this.page)
      this.show = true
    }
  },
  methods: {
    async fetchPageData(endpoint) {
      const api = `https://65da19a3bcc50200fcdc938a.mockapi.io/api/v1/${endpoint}`
      const response = await fetch(api);
      const data = await response.json();
      return data
    }
  }
}


</script>

<style lang="scss">
.wishlist-page {
  width: 100%;
  height: 100%;
}

.wishlist-page__title {
  text-transform: capitalize;
  text-align: center;
}

.wishlist-page__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wishlist-page__spinner {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
}
</style>
