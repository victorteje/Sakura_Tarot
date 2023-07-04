<script setup>
import { ref } from "vue";
import ConnectApi from "../services/ConnectApi.js"

const response = ref();

response.value=ConnectApi(6);
(response.value).then(x=>response.value=x)


</script>

<template>
    <!-- <div>        
        <p>{{ response.spanishName }}</p>
    </div> -->
    <header>
        <input type="text">
        <img id="arrowUp" src="../assets/images/arrow.png" alt="Arrow up">
        <input type="text">
    </header>
    <main>
        <img class="card" v-for="index in 9" :key="index" src="../assets/images/card_back.jpg" alt="Card">
    </main>
    <footer>
        <img id="arrowDown" src="../assets/images/arrow.png" alt="Arrow down">
    </footer>
</template>

<style scoped>
    header, footer {
        display: flex;
        justify-content: space-around;
    }

    #arrowUp {
        height: 8vh;
        transform: rotate(180deg);
    }

    #arrowDown {
        height: 8vh;
    }

    input {
        height: 5vh;
        width: 30vw;
        border: 5px solid hotpink;
        background-color: pink;
    }

    main {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 75vh;
    }
    .card {
        height: 24vh;
        margin: .3vh 3vw;
    }
</style>