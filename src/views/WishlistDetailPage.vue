<template>
    <div>
        <h1>{{ displayItem?.name }}</h1>
        <img class="" :src="displayItem.imageUrl">
        <div>
            <p class="">{{ displayItem.name }}</p>
            <p class="">{{ displayItem.price }}</p>
        </div>
    </div>
</template>


<script>

export default {
    name: 'WishlistDetailPage',
    components: {
    }, mounted() {
        console.log(this.$route, 'item')
        this.displayItem = JSON.parse(this.$route.query.item)
        console.log(this.displayItem)
    },
    data() {
        return {
            displayItem: ""
        }
    },
    methods: {
    }
}
</script>