<script setup>
import { ref } from 'vue';
import ConnectApi from '../services/ConnectApi';

let props=defineProps({
    arrayOfChosen:{
        type: Array, 
        default:[4, 3, 54]
    }
});

const arrayTimes=["Pasado", "Presente", "Futuro"];
let arrayIndex=0;

const IncomingArray= ref();
const cardSrc=ref();
const cardMeaning=ref();
const timeMoment=ref(arrayTimes[0]);

IncomingArray.value=props.arrayOfChosen;
RetrieveCard(arrayIndex);

function RetrieveCard(index){
    let data=ConnectApi(IncomingArray.value[index]);
    console.log(data);
    data.then(x=>{
        cardSrc.value=x.sakuraCard;
        cardMeaning.value=x.meaning;
        //console.log(cardSrc.value);
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

#mainDiv{
    margin: 0 auto;
    border: 2px solid white;
    border-radius: 5px;
    width: 80vw;
    text-align: center;
}

#mainDiv > img{
    min-height: 50vh;
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
    padding: 1vh 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
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