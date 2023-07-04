<script setup>
import GeneralView from './views/GeneralView.vue';
import {RouterLink} from 'vue-router';

</script>


<template>
    <header>
        <img id="logo" src="./assets/images/logo_sakura.png" alt="Logo">
    </header>
    <RouterView />
    <!-- <GeneralView /> -->
</template>

<style>
    body {
        background-color: rgba(255, 0, 255, 0.164);
    }

    header {
        text-align: center;
    }

    #logo {
        height: 7vh;
        margin: 0 auto;
    }
</style>