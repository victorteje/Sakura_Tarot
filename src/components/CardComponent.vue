<script setup>
import { onBeforeMount } from 'vue';
import ConnectApi from '../services/ConnectApi';

let props=defineProps({
    arrayOfChosen:{
        type: Array
    }
});


const array= ref([]);

array.value=props.arrayOfChosen;


</script>

<template>
<div>
    <img src="../assets/images/Reverso-Clow.jpg" alt="">

    
</div>
</template>

<style scoped>

div{
    margin: 0 auto;
    border: 2px solid white;
    border-radius: 5px;
}

</style>