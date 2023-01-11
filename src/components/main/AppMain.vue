<script>
import SingleCard from './SingleCard.vue';
import axios from 'axios';


export default {
    name: 'AppMain',

    components: {
        SingleCard,
    },

    data() {
        return {
            apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
        }
    },

    methods: {
        getCardInfo() {
            axios.get(this.apiUrl, {
                params: {}
            })
                .then(response => {
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
                <span>shish</span>
                <div class="cards-container">
                    <SingleCard />
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss">

</style>