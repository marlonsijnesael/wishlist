<template>
    <ul class="wishlist">
        <WishlistItem v-for="item, i in list" :key="i" :item="item" :person="person"></WishlistItem>
    </ul>
</template>
  
<script>
import WishlistItem from './WishlistItem.vue';

export default {
    name: 'WishlistList',
    props: ['list', 'person'],
    components: {
        WishlistItem,
    },
}
</script>
  

<style lang="scss">
.wishlist {
    padding: unset;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>