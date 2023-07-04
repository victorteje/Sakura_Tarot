<script setup>
    import { ref } from "vue";
    import ConnectApi from "../services/ConnectApi.js"

    const response = ref();

    response.value=ConnectApi(6);
    (response.value).then(x=>response.value=x)

    const counter = ref(1);

    const timeline = ref("Pasado");

    const chooseCard = () => {
        if (counter.value === 3) {
            changeView ();
        }
        else {
            (counter.value)++;
            // if (counter.value === 2){
            //     timeline.value = "Presente"
            // }
            // else {
            //     timeline.value = "Futuro"
            // }
            counter.value === 2?timeline.value ="Presente":timeline.value = "Futuro";
        }
    }

    const shuffle = ref(9);

    const goUp = () => {
        shuffle.value = (shuffle.value)-9;
    }

    const goDown = () => {
        shuffle.value = (shuffle.value)+9;
        if (shuffle.value !== 9){
            document.getElementById("arrowUp").style.visibility = "visible";
        }
    }

</script>

<template>
    <!-- <div>        
        <p>{{ response.spanishName }}</p>
    </div> -->
    <header>
        <input :value=timeline type="text">
        <img id="arrowUp" @click="goUp()" src="../assets/images/arrow.png" alt="Arrow up">
        <input type="text">
    </header>
    <main>
        <img class="card" @click="chooseCard()" v-for="index in 9" :key="index" src="../assets/images/card_back.jpg" alt="Card">
    </main>
    <footer>
        <img id="arrowDown" @click="goDown()" src="../assets/images/arrow.png" alt="Arrow down">
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
        visibility: hidden;
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