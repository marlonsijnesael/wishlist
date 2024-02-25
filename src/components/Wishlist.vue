<template>
    <div class="wishlist">
        <div class="wishlist__filters">
            <p>Sort by:</p>
            <div>
                <input type="radio" id="name" name="sort" value="name" v-model="sortMode">
                <label for="name">name</label><br>
            </div>
            <div>
                <input type="radio" id="price_down" name="sort" value="down" v-model="sortMode">
                <label for="price_down">price (descending)</label><br>
            </div>
            <div>
                <input type="radio" id="price_up" name="sort" value="up" v-model="sortMode">
                <label for="price_up">price (ascending)</label><br><br>
            </div>
        </div>
        <ul class="wishlist__list">
            <WishlistItem v-for="item, i in listSorted" :key="i" :item="item" :person="person"></WishlistItem>
        </ul>
    </div>
</template>
  
<script>
import WishlistItem from './WishlistItem.vue';

export default {
    name: 'WishlistList',
    props: ['list', 'person'],
    components: {
        WishlistItem,
    },
    data() {
        return {
            sortMode: "name",
            listSorted: []
        }
    },
    mounted() {
        this.listSorted = this.sortByName()
    },
    watch: {
        sortMode(newValue) {
            console.log('clicked', newValue);
            switch (newValue) {
                case "name":
                    this.listSorted = this.sortByName()
                    break
                case "up":
                    this.listSorted = this.sortByPriceUp()
                    break
                case "down":
                    this.listSorted = this.sortByPriceDown()
                    break
                default:
                    this.listSorted = this.sortByName()
            }
        }
    },
    methods: {
        sortByName() {
            const tmp = this.list.slice();
            return tmp.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByPriceUp() {
            const tmp = this.list.slice();
            return tmp.sort(function (a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });
        },
        sortByPriceDown() {
            const tmp = this.list.slice();
            return tmp.sort(function (a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
            });
        }
    }
}
</script>
  

<style lang="scss">
.wishlist {
    display: flex;
}

.wishlist__filters {
    width: 160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 12px;
    // border: 1px solid rgba(0,0,0,0.1);
    padding: 8px 12px;
    margin-top: 6px;
}

.wishlist__list {
    padding: unset;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    margin-top: unset;
}
</style>