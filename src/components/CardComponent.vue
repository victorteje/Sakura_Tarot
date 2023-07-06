<script setup>
import { ref } from 'vue';
import ConnectApi from '../services/ConnectApi';

const times=3;
const max=55;
const min=1;
const aleatory =()=>{
    let arr=new Array();
    let chance=0;
    do{
        chance=Math.floor(Math.random() * (max - min + 1) + min);
        if(!(arr.includes(chance))){
            arr.push(chance);
        }
    }while(arr.length<times);
    return arr;
}

const arrayTimes=["Pasado", "Presente", "Futuro"];
let arrayIndex=0;

const IncomingArray= ref();
const cardSrc=ref();
const cardMeaning=ref();
const timeMoment=ref(arrayTimes[0]);

IncomingArray.value=aleatory();
RetrieveCard(arrayIndex);

function RetrieveCard(index){
    let data=ConnectApi(IncomingArray.value[index]);
    
    data.then(x=>{
        cardSrc.value=x.sakuraCard;
        cardMeaning.value=x.meaning;
    });
}

function ForwardCard(){
    document.querySelector(".arrowLeft").classList.remove("invisible");
    arrayIndex++;
    timeMoment.value=arrayTimes[arrayIndex];
    if(arrayIndex===2){
        document.querySelector(".arrowRight").classList.add("invisible");
    }
    RetrieveCard(arrayIndex);
}

function BackwardCard(){
    document.querySelector(".arrowRight").classList.remove("invisible");
    arrayIndex--;
    timeMoment.value=arrayTimes[arrayIndex];
    if(arrayIndex===0){
        document.querySelector(".arrowLeft").classList.add("invisible");
    }
    RetrieveCard(arrayIndex);
}


</script>

<template>
<div id="mainDiv">
    <h3>{{ timeMoment }}</h3>
    <img :src="cardSrc" alt="Chosen Card">
    <p>{{ cardMeaning }}</p>
    <div id="timeNav">
        <img src="../assets/images/arrow.png" alt="Step Backwards" class="arrowLeft invisible" @click="BackwardCard()">
        <img src="../assets/images/arrow.png" alt="Step Forward" class="arrowRight" @click="ForwardCard()">
    </div>    
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fleur+De+Leah&family=Great+Vibes&family=VT323&display=swap');

#mainDiv{
    margin: 0 auto;
    border: 2px solid white;
    border-radius: 5px;
    width: 80vw;
    text-align: center;
    font-family: 'Fleur De Leah';

    background-color: rgba(255, 192, 203, 0.542);
    background-image: url("../assets/images/bgFlowers.png");
}

#mainDiv > img{
    min-height: 50vh;
    box-shadow: 6px 20px 10px rgb(187, 121, 132);
    border-radius: 5px;
}

#timeNav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

p{
    background-color: pink;
    border:0;
    border-radius: 5px;
    width: 75vw;
    min-height: 10vh;
    padding: 1vh 2.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 20px 10px rgb(187, 121, 132); 
    font-size: 1.5rem;  

    font-family: 'Great Vibes', cursive;
}

h3{
    font-size: 3rem;
    margin: 0;
    color: #f706b6;

    text-shadow: -1px -1px 1px yellow, 1px -1px 1px orange, -1px 1px 1px yellow, 1px 1px 1px orange;
}

.arrowLeft{
    transform: rotate(90deg);
    width: 10vw;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.654);
    border-radius: 15px;   
}

.arrowRight{
    transform: rotate(-90deg);
    width: 10vw;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.654);
    border-radius: 15px;
}

.arrowLeft:hover{
    transform: scale(1.2) rotate(90deg);    
}

.arrowRight:hover{
    transform: scale(1.2) rotate(-90deg);   
}

.invisible{
    visibility: hidden;
}

</style>