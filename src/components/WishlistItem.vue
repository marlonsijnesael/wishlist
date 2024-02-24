<template>
    <li class="wishlist-item">
        <img class="wishlist-item__image" :src="item.imageUrl">

        <div class="wishlist-item__content">
            <router-link :to="{ path: `items/${slugify('asdasd')}`, query: { item: stringify(item) } }">

                <p class="wishlist-item__name">{{ item.name }}</p>
                <p class="wishlist-item__price">{{ item.price }}</p>
            </router-link>
        </div>
    </li>
</template>
  
<script>

export default {
    name: 'WishlistList',
    props: ['item'],
    components: {
    },
    methods: {
        stringify(item) {
            return JSON.stringify(item)
        },
        slugify(str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
            str = str.toLowerCase(); // convert string to lowercase
            str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
                .replace(/\s+/g, '-') // replace spaces with hyphens
                .replace(/-+/g, '-'); // remove consecutive hyphens
            return str;
        }
    }
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

.wishlist-item__image {
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
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

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
    }
}
</style>