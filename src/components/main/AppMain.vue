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
                <span>Found {{ store.cardsList.length }} cards</span>
                <div class="cards-container d-flex wrap">
                    <SingleCard v-for="card in store.cardsList" :cardId="card.id"
                        :imgUrl="card.card_images[0].image_url" :imgId="card.card_images[0].id"
                        :cardArchetype="card.archetype" :cardName="card.name" />
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>

</style>