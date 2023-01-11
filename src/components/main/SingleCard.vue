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
    }
}
</script>


<template>
    <article>
        {{ cardId }}
    </article>
</template>


<style lang="">
    
</style>