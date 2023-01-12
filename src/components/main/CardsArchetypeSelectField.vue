<script>
export default {
    name: 'CardsArchetypeSelectField',

    data() {
        return {
            archetypes: ['Alien', 'Laval', 'Vylon', 'Inzektor', 'Umi', 'Gusto'],
        }
    }
}
</script>


<template>
    <select name="cards-archetype" id="cards-archetype">
        <option v-for="archetype in archetypes" :value="archetype">{{ archetype }}</option>
    </select>
</template>


<style lang="scss">
select {
    padding: 0.5rem;
    margin-bottom: 1.7rem;
    cursor: pointer;
}
</style>