<template>
    <ul class="wishlist">
        <WishlistItem v-for="item, i in list" :key="i" :item="item"></WishlistItem>
    </ul>
</template>
  
<script>

import WishlistItem from './WishlistItem.vue';

export default {
    name: 'WishlistList',
    props: ['list'],
    components: {
        WishlistItem,
    }
}
</script>
  

<style lang="scss">
.wishlist {
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>