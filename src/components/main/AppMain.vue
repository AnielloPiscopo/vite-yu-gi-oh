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
                    this.store.cardsList = response.data.data;
                    console.log(response.data.data);
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
                <div class="cards-number">Found {{ store.cardsList.length }} cards</div>
                <div class="cards-container d-flex wrap js-center">
                    <SingleCard v-for="card in store.cardsList" :cardId="card.id"
                        :imgUrl="card.card_images[0].image_url" :imgId="card.card_images[0].id"
                        :cardArchetype="card.archetype" :cardName="card.name" />
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



main {
    background-color: $primary--bg-color;

    >.container {
        padding: 1rem 8.2rem;

        .cards-number {
            background-color: $primary--text-color;
            color: $secondary--text-color;
            padding: 1.5rem 1rem;
            font-weight: bold;
        }

        .container {
            background-color: $secondary--text-color;
            padding: 3.3rem;
        }
    }
}
</style>