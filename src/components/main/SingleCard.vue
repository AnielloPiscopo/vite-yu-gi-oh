<script>
import { store } from './../../store';

export default {
    name: 'SingleCard',

    data() {
        return {
            store,
        }
    },

    props: {
        cardId: Number,
        imgUrl: String,
        imgId: Number,
        cardName: String,
        cardArchetype: String,
    }
}
</script>


<template>
    <article :data-custom-id="cardId">
        <div class="img-container">
            <img :src="imgUrl" :alt="cardName" :data-id-custom="imgId" :title="cardName">
        </div>
        <h3>{{ cardName }}</h3>
        <span>{{ cardArchetype }}</span>
    </article>
</template>


<style lang="scss">
article {
    width: calc(100%/5);
}
</style>