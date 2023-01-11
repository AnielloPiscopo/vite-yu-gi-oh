<script>
import SingleCard from './SingleCard.vue';


export default {
    name: 'AppMain',

    components: {
        SingleCard,
    }
}
</script>


<template>
    <main>
        <div class="container">
            <div class="container">
                <div class="cards-container">
                    <SingleCard />
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss">

</style>