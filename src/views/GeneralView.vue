<script setup>
    import { ref } from "vue"
    import ConnectApi from "../services/ConnectApi.js"
    import { useRouter } from "vue-router";
    import HomeView from "./HomeView.vue"
    import CardComponent from "../components/CardComponent.vue";

    const router = useRouter();
    const response = ref();
    let arrayIdentification=[];

    response.value=ConnectApi(6);
    (response.value).then(x=>response.value=x)

    const counter = ref(1);

    const timeline = ref("Pasado");

    const chooseCard = (event, index) => {
        if (counter.value === 3) {
            router.push ( {
                path: '/',
                name: 'CardComponent',
                component: CardComponent                
            })
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

            arrayIdentification.push([shuffle.value,index]);            

            (event.target).classList.add("disabledCard");
        }
    }

    const shuffle = ref(9);

    const goUp = () => {

        let imgInMain=document.querySelectorAll("main img");
        for(var i=0; i<imgInMain.length;i++){
            imgInMain[i].classList.remove("disabledCard");
        }
        
        shuffle.value = (shuffle.value)-9;
        if (shuffle.value === 9){
            document.getElementById("arrowUp").style.visibility = "hidden";
        }
        if (shuffle.value === 46){
            shuffle.value = 54;
        }
        if (shuffle.value < 55){
            document.getElementById("arrowDown").style.visibility = "visible";
            amountOfCards.value = 9;
            document.getElementById("sakuraBig").style.display = "none";
        }

        arrayIdentification.forEach(x=>{
            if(x[0]===shuffle.value){
                
                document.querySelector("main img:nth-of-type("+x[1]+")").classList.add("disabledCard");
            }
        })
    }
    
    const amountOfCards = ref (9);
    const goDown = () => {

        let imgInMain=document.querySelectorAll("main img");
        for(var i=0; i<imgInMain.length;i++){
            imgInMain[i].classList.remove("disabledCard");
        }

        shuffle.value = (shuffle.value)+9;
        if (shuffle.value !== 9){
            document.getElementById("arrowUp").style.visibility = "visible";
            
        }
        if (shuffle.value > 54){
            document.getElementById("arrowDown").style.visibility = "hidden";
            shuffle.value = 55;
            amountOfCards.value = 1;
            document.getElementById("sakuraBig").style.display = "flex";
        }

        arrayIdentification.forEach(x=>{
            if(x[0]===shuffle.value){
                console.log(document.querySelector("main img:nth-of-type("+x[1]+")"));
                document.querySelector("main img:nth-of-type("+x[1]+")").classList.add("disabledCard");
            }
        })
    }

</script>

<template>
    <!-- <div>        
        <p>{{ response.spanishName }}</p>
    </div> -->
    <header>
        <input :value=timeline type="text">
        <img id="arrowUp" @click="goUp()" src="../assets/images/arrow.png" alt="Arrow up">
        <input id="cardCounter" :value="shuffle + '/55'" type="text">
    </header>
    <main>
        <img class="card" @click="chooseCard($event, index)" v-for="index in amountOfCards" :key="index" src="../assets/images/card_reverse.jpg" alt="Card">
        <img id="sakuraBig" src="../assets/images/sakura_big.png" alt="Sakura">
    </main>
    <footer>
        <img src="../assets/images/sakura_kinomoto2.png" alt="Image of Sakura Kinomoto">
        <img id="arrowDown" @click="goDown()" src="../assets/images/arrow.png" alt="Arrow down">
        <img src="../assets/images/kero.png" alt="Image of Kero">
    </footer>
</template>

<style scoped>
   
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fleur+De+Leah&family=Great+Vibes&family=VT323&display=swap');

    header {
        display: flex;
        justify-content: space-around;
    }

    #arrowUp {
        height: 7vh;
        transform: rotate(180deg);
        visibility: hidden;
    }

    #arrowDown {
        height: 7vh;
    }

    input {
        height: 6vh;
        width: 30vw;
        color: #f70071;
        text-shadow: 1px 1px #f4ff43;
        text-align: center;
        font-weight: bold;
        background: transparent;
        border: none;
        font-size: 4vh;
        font-family: 'Fleur De Leah';
    }

    #cardCounter {
        font-size: 3.3vh;
    }

    main {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 75vh;
    }

    .card {
        height: 22vh;
        margin: .3vh 3vw;
    }

    footer {
        height: 10vh;
        display: flex;
        justify-content: center;
        gap: 4vh;
    }

    #sakuraBig {
        height: 50vh;
        display: none;
    }

    .disabledCard{
        filter: saturate(80%) grayscale(80%);    
        pointer-events: none;    
    }

</style>