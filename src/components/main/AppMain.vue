<script>
import SingleCard from './SingleCard.vue';
import { store } from './../../store';
import axios from 'axios';


export default {
    name: 'AppMain',

    components: {
        SingleCard,
    },

    data() {
        return {
            apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
            store,
        }
    },

    methods: {
        getCardInfo() {
            axios.get(this.apiUrl, {
                params: {}
            })
                .then(response => {
                    this.store.cardsList = response.data.data
                })

                .catch(err => {
                    console.warn(err.message);
                })
        }
    },

    created() {
        this.getCardInfo();
    }
}
</script>


<template>
    <main>
        <div class="container">
            <div class="container">
                <span>shish</span>
                <div class="cards-container">
                    <SingleCard v-for="card in store.cardsList" :cardId="card.id" />
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss">

</style>