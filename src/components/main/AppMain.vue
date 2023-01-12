<script>
import { store } from './../../store';
import CardsContainer from './CardsContainer.vue';


export default {
    name: 'AppMain',

    components: {
        CardsContainer,
    },

    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <main>
        <div class="container" :class="(store.cardsList.length !== store.numOfCards) ? 'loader-container' : ''">
            <CardsContainer />
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



main {
    background-color: $primary--bg-color;

    >.container {
        padding: 1rem 8.2rem;
    }
}
</style>