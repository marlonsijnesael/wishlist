<template>
    <div>
        <h1>{{ displayItem?.name }}</h1>
        <img class="" :src="`${displayItem.image}?random=${Math.random() * 10}`">
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
    }, async mounted() {
        console.log(this.$route)
        const parts = this.$route.fullPath.split('/');
        const person = parts[1]
        console.log(parts)
        const id = parts.pop() || parts.pop();  // handle potential trailing slash
        const api = `https://65da19a3bcc50200fcdc938a.mockapi.io/api/v1/${person}/${id}`
        this.displayItem = await this.fetchData(api, this.$route.title)
    },
    data() {
        return {
            displayItem: ""
        }
    },
    methods: {
        async fetchData(api) {
            console.info(api)
            try {
                const response = await fetch(api);
                const data = await response.json();
                return data

            } catch (error) {
                console.error(error);
            }
            return {}

        }
    }
}
</script>