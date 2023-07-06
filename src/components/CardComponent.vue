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
</div>
    <div id="timeNav">
        <img src="../assets/images/arrow.png" alt="Step Backwards" class="arrowLeft invisible" @click="BackwardCard()">
        <img src="../assets/images/arrow.png" alt="Step Forward" class="arrowRight" @click="ForwardCard()">
    </div>    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fleur+De+Leah&family=Great+Vibes&family=VT323&display=swap');

#mainDiv{
    margin: 0 auto;
    border: 2px solid white;
    border-radius: 5px;
    width: 80vw;
    height: 80vh;
    margin-top: 1vh;
    text-align: center;
    font-family: 'Fleur De Leah';
    background-color: rgba(255, 192, 203, 0.542);
    /* background-image: url("../assets/images/bgFlowers.png"); */
    background-image: url("../assets/images/flower_background.jpg");
    background-size: cover;
    
}

#mainDiv > img{
    height: 54vh;
    box-shadow: 6px 20px 10px rgb(187, 121, 132);
    border-radius: 5px;
}

#timeNav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

p{
    background-color: #f706b6;
    border:0;
    border-radius: 5px;
    width: 70vw;
    min-height: 9vh;
    padding: .5vh 2.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 20px 10px rgb(187, 121, 132); 
    font-size: 1.5rem;  
    font-family: 'Great Vibes', cursive;
    color: #f4fc70;
    text-shadow: 1px 1px 1px black;
    text-align: center;
    margin: 1vh auto;
}

h3{
    font-size: 3rem;
    margin: 0;
    color: #fcbb14;
    text-shadow: -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;
    /* color: #f706b6;
    text-shadow: -1px -1px 1px yellow, 1px -1px 1px orange, -1px 1px 1px yellow, 1px 1px 1px orange; */
}

.arrowLeft{
    transform: rotate(90deg);
    width: 10vw;
    cursor: pointer; 
}

.arrowRight{
    transform: rotate(-90deg);
    width: 10vw;
    cursor: pointer;
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