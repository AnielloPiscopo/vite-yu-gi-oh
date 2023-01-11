<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';


export default {
    conponents: {
        AppHeader,
        AppMain,
    }
}
</script>


<template>
    <AppHeader />
    <AppMain />
</template>


<style lang="scss">
@use './styles/general.scss' as *;
</style>
