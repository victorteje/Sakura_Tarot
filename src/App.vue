<script setup>
import GeneralView from './views/GeneralView.vue';

</script>


<template>
    <header>
        <img id="logo" src="./assets/images/logo_sakura.png" alt="Logo">
    </header>
    <GeneralView/>
</template>

<style>
    header {
        text-align: center;
    }

    #logo {
        height: 7vh;
        margin: 0 auto;
    }
</style>