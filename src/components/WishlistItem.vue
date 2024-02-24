<template>
    <li class="wishlist-item">
        <img class="wishlist-item__image" :src="`${item.image}?random=${Math.random() * 10}`">

        <div class="wishlist-item__content">
            <router-link class="wishlist-item__link" :to="{ path: `${person}/items/${item.id}`}">
                <p class="wishlist-item__name">{{ item.name }}</p>
                <p class="wishlist-item__price">${{ item.price }}</p>
            </router-link>
        </div>
    </li>
</template>
  
<script>

export default {
    name: 'WishlistList',
    props: ['person','item'],
    components: {
    },
}
</script>
  

<style lang="scss">
.wishlist-item {
    width: 200px;
    height: 200px;
    position: relative;
    list-style: none;
    z-index: 10000;
    padding: 6px;
    border-radius: 24px;
    overflow: hidden;
}

.wishlist-item__link {
    text-decoration: none;
    color: #ffffff;
}

.wishlist-item__image-container {
    position: relative;
}

.wishlist-item__name {
    color: #ffffff
}

.wishlist-item__image {
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.wishlist-item__price {
    color: white;
    text-decoration: none
}

.wishlist-item__content {
    opacity: 0;
    transition: opacity ease-in 200ms;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #ffffff;
    text-decoration: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
    }
}
</style>