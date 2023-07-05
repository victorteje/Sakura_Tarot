<script setup>
import GeneralView from './views/GeneralView.vue';
import {RouterLink} from 'vue-router';

</script>


<template>
    <header>
        <img class="cherryBlossom" src="./assets/images/cherry-blossom1.png" alt="Cherry blossom left">
        <img id="logo" src="./assets/images/logo_sakura.png" alt="Logo">
        <img class="cherryBlossom" src="./assets/images/cherry-blossom1.png" alt="Cherry blossom right">
    </header>
    <RouterView />
</template>

<style>
    .cherryBlossom {
        height: 5vh;
    }

    body {
        background: linear-gradient(to bottom right, #ffafea, #f706b7e8);
        background-attachment: fixed;
        margin: 0;
        border: 5px solid transparent;
        border-image-source: url(./assets/images/cherry-blossom1.png);
        border-image-repeat: round;
        border-image-width: 7vh;
        border-image-slice: inherit;
    }

    header {
        text-align: center;
        display: flex;
        justify-content: center;
    }

    #logo {
        height: 6vh;
        /* margin: 0 auto; */
    }
</style>